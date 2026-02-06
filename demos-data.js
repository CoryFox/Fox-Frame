/*
  Fox & Frame Studio
  Demo site registry

  Add new demos here and they will automatically work in:
  - demos.html (listing)
  - demo.html (single demo template)
  - the modal preview on index.html (buttons using data-demo-key)
*/

window.FF_DEMOS = {
  trades: {
    key: "trades",
    title: "Local Trades Website",
    subtitle: "Plumbing and heating demo build",
    tags: ["Design", "Build", "Enquiries"],
    // Use a path relative to the root of the GitHub Pages site
    url: "ff_trades_demo/index.html",
    // Copy can be replaced per project
    overview: "A clean, mobile-first demo aimed at trades. Clear service sections, click-to-call, and a simple enquiry route.",
    notes: [
      "Hero with one clear CTA",
      "Services and reassurance in scannable blocks",
      "Fast to navigate on mobile"
    ]
  }
};
