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
    title: "Databowl: Clarifying a fragmented acquisition-to-learning journey",
    intro:
      "This case focused on reducing friction across connected touchpoints where lead-generation journeys and LMS-linked progression needed to operate as one coherent system.",
    summaryCards: [
      {
        icon: "bi-briefcase",
        label: "Role",
        text: "UX strategy and journey architecture across connected funnel and learning experiences"
      },
      {
        icon: "bi-diagram-3",
        label: "Scope",
        text: "Cross-site flow logic, messaging hierarchy, and acquisition-to-learning continuity"
      },
      {
        icon: "bi-people",
        label: "Primary Users",
        text: "Prospects and learners moving through multi-touchpoint journeys"
      },
      {
        icon: "bi-graph-up-arrow",
        label: "Improvement Focus",
        text: "Clarity of progression, reduced ambiguity, and stronger end-to-end coherence"
      }
    ],
    context:
      "The journey spanned multiple properties and intents, creating handoff gaps between quote activity, onboarding, and LMS-linked progression. Users often lost context as they moved across touchpoints.",
    challenge:
      "The challenge was creating a consistent journey logic across a distributed ecosystem so users could progress confidently while internal workflows remained practical and aligned.",
    keyChanges: [
      {
        title: "Cross-touchpoint journey mapping",
        bullets: [
          "Mapped breakpoints where users dropped context between properties",
          "Identified friction points that interrupted progression to meaningful next steps"
        ]
      },
      {
        title: "Flow and messaging standardisation",
        bullets: [
          "Aligned navigation cues, content hierarchy, and interaction expectations",
          "Reduced interpretation burden for users moving across different journey stages"
        ]
      },
      {
        title: "Acquisition-to-learning continuity",
        bullets: [
          "Connected front-end acquisition decisions to downstream LMS-linked outcomes",
          "Created clearer transitions between commercial and learning touchpoints"
        ]
      },
      {
        title: "Operational alignment",
        bullets: [
          "Ensured UX decisions reflected internal handling and delivery realities",
          "Improved consistency between strategy intent and practical execution"
        ]
      }
    ],
    before: [
      "Fragmented progression across disconnected properties",
      "Ambiguous next steps between acquisition and learning touchpoints",
      "Inconsistent journey logic creating avoidable user uncertainty"
    ],
    after: [
      "Clearer handoffs across acquisition, onboarding, and LMS-linked progression",
      "Lower ambiguity and stronger confidence in journey progression",
      "Better UX coherence aligned with operational constraints"
    ],
    outcomes: [
      "Clearer progression across connected touchpoints",
      "Lower ambiguity between marketing, onboarding, and learning experiences",
      "Stronger alignment between UX decisions and operational realities",
      "More coherent ecosystem behavior across distributed user journeys"
    ],
    note:
      "Quantitative outputs are excluded due to permission constraints. This case emphasizes strategic structure and observable behavioural improvements.",
    ctaPrimary: {
      label: "Discuss a similar challenge",
      href: "/index.html#contact"
    },
    ctaSecondary: {
      label: "All case studies",
      href: "/demos.html"
    }
  },

  quotehound: {
    title: "QuoteHound: Designing a connected multi-site quote ecosystem",
    intro:
      "QuoteHound required coordinated UX across multiple acquisition journeys while keeping downstream Databowl workflow requirements intact.",
    summaryCards: [
      {
        icon: "bi-briefcase",
        label: "Role",
        text: "UX architecture and conversion flow design across linked quote properties"
      },
      {
        icon: "bi-diagram-3",
        label: "Scope",
        text: "Multi-site consistency, trust-first progression, and form journey optimisation"
      },
      {
        icon: "bi-people",
        label: "Primary Users",
        text: "Insurance prospects moving through high-friction quote and enquiry flows"
      },
      {
        icon: "bi-graph-up-arrow",
        label: "Improvement Focus",
        text: "Completion confidence, lead quality continuity, and cross-system alignment"
      }
    ],
    context:
      "Several quote-focused properties needed consistent UX logic, strong trust signals, and high completion momentum while feeding into linked operational and learning systems.",
    challenge:
      "The challenge was balancing conversion speed with confidence in a high-consideration domain, while ensuring upstream UX decisions aligned with Databowl-linked downstream processes.",
    keyChanges: [
      {
        title: "Shared UX pattern system across properties",
        bullets: [
          "Defined repeatable layout and interaction structures across quote properties",
          "Increased familiarity and reduced cognitive switching between journeys"
        ]
      },
      {
        title: "High-friction form flow optimisation",
        bullets: [
          "Improved sequencing, hierarchy, and trust cue placement during quote progression",
          "Supported decision confidence without slowing momentum"
        ]
      },
      {
        title: "Acquisition-to-operations continuity",
        bullets: [
          "Aligned front-end UX choices with Databowl-linked downstream handling needs",
          "Protected lead quality by reducing ambiguity in captured intent"
        ]
      },
      {
        title: "Ecosystem-level experience consistency",
        bullets: [
          "Connected multi-site experience decisions into one coherent service layer",
          "Improved overall continuity between user-facing journeys and internal workflows"
        ]
      }
    ],
    before: [
      "Inconsistent UX patterns across quote properties",
      "Higher friction in key form stages affecting completion confidence",
      "Weaker continuity between acquisition and downstream workflows"
    ],
    after: [
      "More consistent multi-site experience and interaction logic",
      "Smoother progression through quote journeys with better trust support",
      "Stronger ecosystem alignment from user intent through operational handling"
    ],
    outcomes: [
      "More consistent user experience across a multi-site ecosystem",
      "Improved quote-flow continuity through trust and progression design",
      "Better alignment between acquisition UX and internal workflow needs",
      "Clearer ecosystem behavior supporting both conversion and operations"
    ],
    note:
      "Where precise conversion data is restricted, this case focuses on structural decisions, behavioural intent, and cross-system UX coherence.",
    ctaPrimary: {
      label: "View QuoteHound live flow",
      href: "/QuoteHound1_demo/quotehound1.html",
      newTab: true
    },
    ctaSecondary: {
      label: "All case studies",
      href: "/demos.html"
    }
  }
};
