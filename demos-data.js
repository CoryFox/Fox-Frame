/*
  Modified Demo Registry with Category Support

  Each entry now includes a `category` property. This allows the demos
  listing page to group demos under meaningful headings (e.g. Service,
  Fitness). Additional demos can be added following the same pattern.
*/

window.FF_DEMOS = {
  trades: {
    key: "trades",
    category: "Service",
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
    url: "ff_trades_demo/index.html",
    overview: "A clean, mobile-first build for local trades. Clear service scannability, trust blocks, click-to-call, and a friction-free quote request.",
    notes: [
      "One clear CTA with click-to-call",
      "Trust stack (reviews, service areas, accreditations)",
      "Short quote form with fast confirmation"
    ]
  },

  nyf: {
    key: "nyf",
    category: "Fitness",
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
    url: "ff_nyf_demo/index.html",
    overview: "A premium, conversion-first personal trainer site. Built around a simple funnel, lead magnet download, and a clean calendar booking section (mocked submission).",
    notes: [
      "High-impact hero with transformation messaging",
      "Lead magnet flow, PDF download, simple form",
      "Booking section with clear expectations and next steps"
    ]
  }
};
