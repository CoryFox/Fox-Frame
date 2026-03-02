const fs = require("fs/promises");
const path = require("path");

const CACHE_PATH = path.join(__dirname, "medium-cache.json");
const MAX_POSTS = 12;
const REQUEST_TIMEOUT_MS = 8000;

function stripCdata(value = "") {
  return value.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function decodeHtml(value = "") {
  return value
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
}

function stripHtml(value = "") {
  return decodeHtml(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function getTagValue(block, tagName) {
  const tag = tagName.replace(":", "\\:");
  const pattern = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = block.match(pattern);
  return match ? stripCdata(match[1]) : "";
}

function getFirstImageSrc(html = "") {
  const match = html.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/i);
  return match ? decodeHtml(match[1]) : "";
}

function toFeedUrl(input = "") {
  const value = input.trim();
  if (!value) return "";
  if (value.includes("/feed")) return value;
  if (value.startsWith("@")) return `https://medium.com/feed/${value}`;
  if (!value.startsWith("http")) return `https://medium.com/feed/@${value}`;
  const url = new URL(value);
  if (url.hostname === "medium.com" && url.pathname.startsWith("/@")) {
    return `https://medium.com/feed${url.pathname.replace(/\/$/, "")}`;
  }
  return `${value.replace(/\/$/, "")}/feed`;
}

function getConfiguredFeedUrl() {
  const envFeedUrl = process.env.MEDIUM_FEED_URL || "";
  if (envFeedUrl.trim()) return toFeedUrl(envFeedUrl);
  const site = require("./site.json");
  if (site.mediumFeedUrl) return toFeedUrl(site.mediumFeedUrl);
  if (site.mediumProfileUrl) return toFeedUrl(site.mediumProfileUrl);
  return "";
}

function mapItemToPost(itemXml) {
  const link = getTagValue(itemXml, "link");
  const title = decodeHtml(getTagValue(itemXml, "title"));
  const pubDateRaw = getTagValue(itemXml, "pubDate");
  const descriptionHtml = getTagValue(itemXml, "description");
  const contentHtml = getTagValue(itemXml, "content:encoded");
  const date = new Date(pubDateRaw);
  const summary = stripHtml(descriptionHtml || contentHtml).slice(0, 180);

  return {
    title,
    url: link,
    summary,
    thumbnail: getFirstImageSrc(descriptionHtml || contentHtml),
    dateISO: Number.isNaN(date.getTime()) ? "" : date.toISOString(),
    dateLabel: Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
    source: "Medium"
  };
}

function parseFeed(xml = "") {
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  return items
    .map(mapItemToPost)
    .filter((post) => post.title && post.url)
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1))
    .slice(0, MAX_POSTS);
}

async function readCache() {
  try {
    const raw = await fs.readFile(CACHE_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed.posts) ? parsed.posts : [];
  } catch {
    return [];
  }
}

async function writeCache(posts) {
  const payload = JSON.stringify(
    {
      fetchedAt: new Date().toISOString(),
      posts
    },
    null,
    2
  );
  try {
    await fs.writeFile(CACHE_PATH, payload, "utf8");
  } catch {
    // Cache writes are best-effort.
  }
}

async function fetchFeed(feedUrl) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(feedUrl, { signal: controller.signal });
    if (!response.ok) return [];
    const xml = await response.text();
    return parseFeed(xml);
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

module.exports = async function () {
  const feedUrl = getConfiguredFeedUrl();
  if (!feedUrl) return [];

  const posts = await fetchFeed(feedUrl);
  if (posts.length) {
    await writeCache(posts);
    return posts;
  }

  return readCache();
};
