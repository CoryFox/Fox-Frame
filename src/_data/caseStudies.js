module.exports = {
  // Copy this block to create a new case study entry.
  // 1) Duplicate `template` and rename the key (e.g. `newClient`)
  // 2) Fill all fields with project-specific content
  // 3) Create `src/case-studies/<slug>.njk` and set: `{% set cs = caseStudies.<key> %}`
  // 4) Include the page partial: `{% include "partials/case-study-page.njk" %}`
  template: {
    title: "Case Study Title",
    intro: "One-sentence overview of the project and why it mattered.",
    summaryCards: [
      {
        icon: "bi-briefcase",
        label: "Role",
        text: "What role was played and at what level."
      },
      {
        icon: "bi-diagram-3",
        label: "Scope",
        text: "What product areas or journeys were covered."
      },
      {
        icon: "bi-people",
        label: "Primary Users",
        text: "Who the work was for."
      },
      {
        icon: "bi-graph-up-arrow",
        label: "Improvement Focus",
        text: "What was improved most."
      }
    ],
    context: "Brief context explaining the environment and constraints.",
    challenge: "The primary problem this work needed to solve.",
    keyChanges: [
      {
        title: "Change area one",
        bullets: [
          "Specific change made",
          "How the change improved clarity or flow"
        ]
      },
      {
        title: "Change area two",
        bullets: [
          "Specific change made",
          "How the change improved outcomes"
        ]
      }
    ],
    before: [
      "What was true before change one",
      "What was true before change two"
    ],
    after: [
      "What improved after change one",
      "What improved after change two"
    ],
    outcomes: [
      "Qualitative or quantitative improvement one",
      "Qualitative or quantitative improvement two"
    ],
    note: "Optional note for confidentiality or measurement constraints.",
    ctaPrimary: {
      label: "Discuss a similar challenge",
      href: "/index.html#contact"
    },
    ctaSecondary: {
      label: "All case studies",
      href: "/demos.html"
    }
  },

  fourjaw: {
    title: "FourJaw Manufacturing Analytics: Establishing UX direction in a complex B2B SaaS product",
    intro:
      "This case covers the transition from software development into UX/UI leadership, with a focus on reducing operational friction across onboarding and production-critical workflows.",
    summaryCards: [
      {
        icon: "bi-briefcase",
        label: "Role",
        text: "UX/UI Lead (from May 2023), previously software developer from July 2021"
      },
      {
        icon: "bi-diagram-3",
        label: "Scope",
        text: "Onboarding, setup flows, IoT connection journeys, and operator interface redesign"
      },
      {
        icon: "bi-people",
        label: "Primary Users",
        text: "Shop-floor operators on managed tablets and reporting teams on legacy desktop environments"
      },
      {
        icon: "bi-graph-up-arrow",
        label: "Improvement Focus",
        text: "Real-time interaction trust, reduced onboarding friction, and faster delivery through systemisation"
      }
    ],
    gallery: [
      {
        src: "/assets/case-studies/fourjaw/fourjaw-hydrafeed-downtime.webp",
        alt: "FourJaw downtime logging interface",
        aspect: "landscape",
        caption: "Operator workflow for downtime logging"
      },
      {
        src: "/assets/case-studies/fourjaw/fourjaw-sps-operator.webp",
        alt: "FourJaw operator view on production interface",
        aspect: "landscape",
        caption: "Operator-facing workflow for live production tasks"
      },
      {
        src: "/assets/case-studies/fourjaw/fourjaw-sps-timeline.webp",
        alt: "FourJaw timeline and status tracking interface",
        aspect: "landscape",
        caption: "Timeline visibility for status and events"
      }
    ],
    context:
      "FourJaw provides manufacturing analytics software used by operational teams to monitor machine performance and improve production efficiency. As product scope expanded, core user journeys became harder to navigate and harder for teams to evolve consistently.",
    challenge:
      "Operators needed accurate real-time information for live decisions, but lagging updates created cognitive mismatch. At the same time, onboarding and setup journeys needed clearer structure to reduce client friction and improve time-to-value.",
    keyChanges: [
      {
        title: "Onboarding and setup flow redesign",
        bullets: [
          "Restructured onboarding, user setup, machine setup, and IoT connection pathways",
          "Reduced early-stage confusion points that caused clients to get stuck",
          "Improved progression toward usable reporting dashboards"
        ]
      },
      {
        title: "Operator interface redesign",
        bullets: [
          "Redesigned uptime monitoring and downtime reason capture workflows",
          "Improved job lifecycle flows: create, update, delete, and assign",
          "Introduced clearer OEE visibility and shop-floor messaging interactions",
          "Modernised paper job-card behavior into digital-first interaction patterns"
        ]
      },
      {
        title: "Real-time interaction reliability",
        bullets: [
          "Worked with engineering to improve real-time update behavior on shop-floor tablets",
          "Reduced mismatch between machine state and operator perception"
        ]
      },
      {
        title: "Design system and team enablement",
        bullets: [
          "Implemented component-based design system with Figma libraries as source of truth",
          "Aligned patterns to Material 3 and WCAG accessibility principles",
          "Mentored junior developers to improve handoff quality and delivery consistency"
        ]
      }
    ],
    before: [
      "Lagging machine-state feedback on operator tablets",
      "Fragmented onboarding and setup journeys",
      "Paper-based job-card dependency in operational workflows",
      "Less consistent implementation patterns across teams"
    ],
    after: [
      "Stronger real-time trust in operator-facing status updates",
      "Clearer onboarding and setup progression across critical tasks",
      "Digitised operator flow replacing paper-based friction",
      "Faster, more aligned delivery through shared component patterns"
    ],
    outcomes: [
      "Reduced onboarding churn and fewer stuck clients during early adoption",
      "Improved operational confidence in tablet-based workflows on the shop floor",
      "Better team alignment and faster development through design system adoption",
      "More accessible and consistent UI outcomes through Material 3 and WCAG-first decisions",
      "Stronger product direction by connecting UX decisions to operational reality"
    ],
    note:
      "Specific performance figures are excluded due to confidentiality constraints. This case intentionally emphasizes decision quality, workflow improvements, and observed behavioural outcomes.",
    ctaPrimary: {
      label: "Discuss a similar challenge",
      href: "/index.html#contact"
    },
    ctaSecondary: {
      label: "All case studies",
      href: "/demos.html"
    }
  },

  databowl: {
    title: "Databowl: Rebuilding the 'Grey Beast' into a scalable lead operations platform",
    intro:
      "From 2018 to 2020, this work transformed Databowl from a dated, hard-to-navigate internal system into a clearer, process-led SaaS experience that improved onboarding, lead quality outcomes, and client confidence.",
    summaryCards: [
      {
        icon: "bi-briefcase",
        label: "Role",
        text: "Sole UX Designer and developer, leading UX direction in collaboration with CEO and Head of Engineering"
      },
      {
        icon: "bi-diagram-3",
        label: "Scope",
        text: "Onboarding architecture, first-campaign setup, validation rules, deduplication flow, and export integration journeys"
      },
      {
        icon: "bi-people",
        label: "Primary Users",
        text: "Agency and enterprise teams across the UK and Europe managing lead generation and validation workflows"
      },
      {
        icon: "bi-graph-up-arrow",
        label: "Improvement Focus",
        text: "Reduced onboarding friction, clearer process completion, and stronger lead quality outcomes"
      }
    ],
    gallery: [
      {
        src: "/assets/case-studies/databowl/solutions-system.webp",
        alt: "Databowl system overview screen",
        aspect: "landscape",
        caption: "Core system overview and navigation structure"
      },
      {
        src: "/assets/case-studies/databowl/solutions-lead-generation.webp",
        alt: "Databowl lead generation workflow",
        aspect: "landscape",
        caption: "Lead generation journey and campaign flow"
      },
      {
        src: "/assets/case-studies/databowl/shoulder.webp",
        alt: "Databowl campaign and lead operations interface",
        aspect: "landscape",
        caption: "Campaign and lead operations interface"
      }
    ],
    context:
      "Databowl is a SaaS platform for lead validation, cleaning, and management. When the engagement started in January 2018, the platform was internally nicknamed the 'Grey Beast' because of its dated UI, inconsistent UX patterns, and complex setup experience. Sharebowl, a dedicated landing-page service, supported lead acquisition while Databowl handled downstream lead operations.",
    challenge:
      "The core challenge was making complex, process-driven journeys usable at scale. New users needed to configure validation logic, deduplication, and export integrations correctly in early setup, but the legacy experience made progression unclear and increased onboarding risk.",
    keyChanges: [
      {
        title: "Wizard-style journey architecture for setup-heavy workflows",
        bullets: [
          "Redesigned onboarding around structured wizard-style flows to match process-led tasks",
          "Made first-campaign setup clearer by guiding users through required decisions in the right sequence"
        ]
      },
      {
        title: "Critical setup path redesign",
        bullets: [
          "Reworked validation rule setup, deduplication controls, and export integration steps",
          "Reduced ambiguity in high-impact configuration areas that directly affected lead outcomes"
        ]
      },
      {
        title: "Design system and handoff maturity",
        bullets: [
          "Delivered journey maps, interactive prototypes, and full developer handoff packages",
          "Used UXPin and Axure RP initially, then moved to Figma with more structured component-based standards"
        ]
      },
      {
        title: "Operational alignment",
        bullets: [
          "Led product experience decisions with commercial and engineering input to keep delivery realistic",
          "Translated leadership vision into practical, buildable UX direction for a six-developer team"
        ]
      }
    ],
    before: [
      "Legacy UI patterns made complex setup journeys difficult to interpret",
      "Onboarding and first-campaign flows created avoidable confusion and drop-off risk",
      "Validation, deduplication, and export configuration were high-friction for new users"
    ],
    after: [
      "Structured onboarding and campaign setup flows made progression clearer",
      "Lower onboarding friction and better client confidence in early platform use",
      "More consistent UX direction that supported continuous product improvement through 2020"
    ],
    outcomes: [
      "Increased client base as the platform became easier to adopt and trust",
      "Reduced churn during onboarding by improving setup clarity and flow completion",
      "Improved downstream lead quality and conversion outcomes for clients",
      "Stronger product-market credibility by turning a dated legacy experience into a more mature SaaS platform"
    ],
    note:
      "Precise commercial metrics are excluded due to confidentiality constraints. Outcomes are intentionally described as directional improvements observed across onboarding, client retention, and lead quality performance.",
    ctaPrimary: {
      label: "Discuss a similar challenge",
      href: "/index.html#contact"
    },
    ctaSecondary: {
      label: "All case studies",
      href: "/demos.html"
    }
  },

  soloprotect: {
    title: "SoloProtect: UX-led evolution into IoT-aware safety and fleet monitoring",
    intro:
      "From January 2020 to January 2021, this work focused on strengthening SoloProtect's supervisor and operations experience by connecting lone-worker alarm devices, geolocation visibility, and incident response workflows into clearer product journeys.",
    summaryCards: [
      {
        icon: "bi-briefcase",
        label: "Role",
        text: "UX Developer embedded in the engineering team"
      },
      {
        icon: "bi-diagram-3",
        label: "Scope",
        text: "Desktop web interface, geolocation service UX, and first iteration of a new SoloProtect app for handoff"
      },
      {
        icon: "bi-people",
        label: "Primary Users",
        text: "Supervisors and operations teams monitoring lone-worker alarms and fleet activity"
      },
      {
        icon: "bi-graph-up-arrow",
        label: "Improvement Focus",
        text: "Faster monitoring decisions, stronger situational visibility, and clearer incident response actions"
      }
    ],
    gallery: [
      {
        src: "/assets/case-studies/soloprotect/soloprotect-overview.webp",
        alt: "SoloProtect monitoring overview",
        aspect: "square",
        caption: "Monitoring overview for live supervisory oversight"
      },
      {
        src: "/assets/case-studies/soloprotect/soloprotect-insights.webp",
        alt: "SoloProtect insights and operational metrics view",
        aspect: "portrait",
        caption: "Operational insights and monitoring metrics"
      },
      {
        src: "/assets/case-studies/soloprotect/soloprotect-location.webp",
        alt: "SoloProtect live location interface",
        aspect: "landscape",
        caption: "Location visibility and map-based status context"
      },
      {
        src: "/assets/case-studies/soloprotect/soloprotect-mobile.webp",
        alt: "SoloProtect mobile alarm monitoring interface",
        aspect: "square",
        caption: "Mobile alarm monitoring interface"
      }
    ],
    context:
      "SoloProtect combines wearable lone-worker alarm devices with fleet-level monitoring and operational response tooling. The work required aligning UX decisions with high-stakes monitoring contexts, embedded IoT device behavior, and practical engineering delivery constraints.",
    challenge:
      "The challenge was making location-aware monitoring and response decisions clearer for supervisory users while maturing both design quality and implementation in a new technical environment (.NET, C#, Blazor).",
    keyChanges: [
      {
        title: "Geolocation monitoring experience",
        bullets: [
          "Led creation of a new geolocating service experience for individual alarm tracking and fleet oversight",
          "Improved map-level clarity so supervisors could identify status and location context faster during live monitoring"
        ]
      },
      {
        title: "Supervisor and ops desktop interface design",
        bullets: [
          "Designed core desktop web journeys used by supervisors and operations teams",
          "Improved journey flow and decision support in incident-response and oversight use cases"
        ]
      },
      {
        title: "Prototype to production delivery",
        bullets: [
          "Created interactive prototypes in Figma and Axure RP, then translated approved journeys into product interfaces",
          "Built production-ready interfaces and components using C#, Blazor, and Azure DevOps workflows"
        ]
      },
      {
        title: "App foundation and handoff",
        bullets: [
          "Developed the first iteration of the new SoloProtect app experience",
          "Prepared structured handoff for full engineering continuation and scale-out"
        ]
      }
    ],
    before: [
      "Lower visibility across individual alarm events and broader fleet context",
      "Harder-to-scan supervisory journeys in incident and monitoring scenarios",
      "Less mature UX-to-engineering flow for delivering consistent interfaces"
    ],
    after: [
      "Clearer map-based monitoring for both single-device and fleet-level oversight",
      "More confident supervisor decision-making in live incident contexts",
      "Stronger design-to-delivery consistency through prototype-led implementation"
    ],
    outcomes: [
      "Faster monitoring decisions for supervisor and operations teams",
      "Safer, more visible lone workers through clearer geolocation awareness",
      "Improved incident response clarity across high-priority workflows",
      "Broader full-stack capability growth in .NET, C#, and Blazor delivery"
    ],
    note:
      "Due to confidentiality constraints, this case emphasizes responsibilities, journey improvements, and observable operational outcomes rather than exact incident or performance metrics.",
    ctaPrimary: {
      label: "Discuss a similar challenge",
      href: "/index.html#contact"
    },
    ctaSecondary: {
      label: "All case studies",
      href: "/demos.html"
    }
  }
};
