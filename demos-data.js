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
    tags: ["Design", "Speed", "Enquiries"],
    tech: ["HTML", "CSS", "JavaScript"],
    showcase: {
      images: [
        { src: "assets/showcase-trades-1.png", alt: "Trades demo, desktop style preview" },
        { src: "assets/showcase-trades-2.png", alt: "Trades demo, service and trust blocks preview" }
      ],
      mobile: { src: "assets/showcase-trades-mobile.png", alt: "Trades demo, mobile style preview" }
    },
    // Use a path relative to the root of the GitHub Pages site
    url: "ff_trades_demo/index.html",
    // Copy can be replaced per project
    overview: "A clean, mobile-first build for local trades. Clear service scannability, trust blocks, click-to-call, and a friction-free quote request.",
    notes: [
      "One clear CTA with click-to-call",
      "Trust stack (reviews, service areas, accreditations)",
      "Short quote form with fast confirmation"
    ]
  },

  nyf: {
    key: "nyf",
    title: "New You Fitness",
    subtitle: "Premium PT landing page with lead magnet and booking",
    tags: ["Brand", "Lead magnet", "Booking"],
    tech: ["Tailwind CSS", "JavaScript", "HTML"],
    showcase: {
      images: [
        { src: "assets/showcase-nyf-1.png", alt: "New You Fitness demo, desktop style preview" },
        { src: "assets/showcase-nyf-2.png", alt: "New You Fitness demo, lead magnet flow preview" }
      ],
      mobile: { src: "assets/showcase-nyf-mobile.png", alt: "New You Fitness demo, mobile style preview" }
    },
    // Use a path relative to the root of the GitHub Pages site
    url: "ff_nyf_demo/index.html",
    overview: "A premium, conversion-first personal trainer site. Built around a simple funnel, lead magnet download, and a clean calendar booking section (mocked submission).",
    notes: [
      "High-impact hero with transformation messaging",
      "Lead magnet flow, PDF download, simple form",
      "Booking section with clear expectations and next steps"
    ]
  }
};
