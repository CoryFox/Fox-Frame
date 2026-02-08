const demos = require("../content/demos.json");

const items = Object.values(demos);
const grouped = {};
items.forEach((demo) => {
  const category = demo.category || "Other";
  if (!grouped[category]) {
    grouped[category] = [];
  }
  grouped[category].push(demo);
});

const groupedList = Object.keys(grouped)
  .sort()
  .map((category) => ({
    category,
    items: grouped[category]
  }));

module.exports = {
  items,
  grouped: groupedList,
  raw: demos
};
