import { chromium } from "playwright";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { mkdir } from "fs/promises";

const __dirname = resolve(fileURLToPath(new URL(".", import.meta.url)));
const repoRoot = resolve(__dirname, "..");
const outDir = resolve(repoRoot, "src/public/assets");

const demos = [
  {
    key: "nyf",
    name: "New You Fitness",
    file: "src/ff_nyf_demo/index.html",
    desktopShots: ["showcase-nyf-1.png", "showcase-nyf-2.png"],
    mobileShot: "showcase-nyf-mobile.png",
    heroShot: "hero-nyf.png"
  },
  {
    key: "quotehound",
    name: "QuoteHound",
    file: "src/QuoteHound1_demo/quotehound1.html",
    desktopShots: ["showcase-quotehound-1.png", "showcase-quotehound-2.png"],
    mobileShot: "showcase-quotehound-mobile.png"
  },
  {
    key: "savewise",
    name: "SaveWise",
    file: "src/savewise_demo/index.html",
    desktopShots: ["showcase-savewise-1.png", "showcase-savewise-2.png"],
    mobileShot: "showcase-savewise-mobile.png",
    heroShot: "hero-savewise.png"
  },
  {
    key: "mpc",
    name: "My PMI Cover",
    file: "src/mypmicover_demo/index.html",
    desktopShots: ["showcase-mpc-1.png", "showcase-mpc-2.png"],
    mobileShot: "showcase-mpc-mobile.png",
    heroShot: "hero-mpc.png"
  }
];

const viewports = {
  desktop: { width: 1400, height: 900 },
  mobile: { width: 390, height: 844 }
};

async function capture() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const demo of demos) {
    const filePath = resolve(repoRoot, demo.file);
    const url = `file://${filePath}`;

    await page.setViewportSize(viewports.desktop);
    await page.goto(url, { waitUntil: "load" });
    await page.waitForTimeout(1200);

    for (const shot of demo.desktopShots) {
      await page.screenshot({
        path: resolve(outDir, shot),
        fullPage: false
      });
      await page.waitForTimeout(200);
    }

    if (demo.heroShot) {
      await page.screenshot({
        path: resolve(outDir, demo.heroShot),
        fullPage: false
      });
    }

    await page.setViewportSize(viewports.mobile);
    await page.goto(url, { waitUntil: "load" });
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: resolve(outDir, demo.mobileShot),
      fullPage: false
    });
  }

  await browser.close();
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
