# Worklog

Use this file to preserve project context between sessions.

## Current Focus
- Primary goal: Reposition site from build-led studio messaging to senior UX consultancy + portfolio signaling.
- Secondary goal: Standardize case studies into a reusable system for rapid authoring.
- Active branch: `feature/ux-consultancy-pivot-case-studies`

## Decisions Made
- [2026-03-02] Homepage repositioned to consultancy-first.
  - Why: Align brand with senior UX hiring signal and strategic consultancy value.
  - Files affected: `src/index.njk`, `src/_includes/partials/nav.njk`, `src/content/work.json`
- [2026-03-02] Case-study system templated.
  - Why: Ensure consistent scanability and reduce maintenance for future case studies.
  - Files affected: `src/_data/caseStudies.js`, `src/_includes/partials/case-study-page.njk`, `src/case-studies/*.njk`
- [2026-03-02] Featured engagement card styling protected.
  - Why: Prevent CTA hierarchy drift where non-featured card appears primary.
  - Files affected: `src/assets/styles/main.scss`, `src/index.njk`
- [2026-03-02] Case-study scanability and visual consistency improved.
  - Why: Hiring managers need fast `Before -> Change -> Improvement` comprehension.
  - Files affected: `src/assets/styles/main.scss`, `src/case-studies/fourjaw.njk` (then propagated via template)
- [2026-03-02] README consolidated for new architecture.
  - Why: Document authoring workflow and case-study templating.
  - Files affected: `README.md`

## In Progress
- Task: Open PR and merge branch.
  - Owner: Cory / assistant
  - Status: Branch pushed, PR URL generation done via manual link due API connectivity issue in environment.
  - Notes: Branch contains commit `e185a34`; remote branch exists.

## Next Actions
1. Open and submit PR: `https://github.com/CoryFox/Fox-Frame/pull/new/feature/ux-consultancy-pivot-case-studies`
2. Add/replace real case-study assets where permission allows (especially FourJaw/Databowl visuals).
3. Continue refining Databowl and QuoteHound copy with project-specific operational details.

## Open Questions
- Which safe screenshots/artifacts can be used publicly for FourJaw and Databowl?
- Should QuoteHound CTA remain to live flow or route to a deeper internal narrative first?
- Do we want a `case study index filter` (by domain/type) now or after content maturity?

## Constraints
- Brand/positioning constraints: Strategy-first tone; build capability secondary; senior UX signaling required.
- Technical constraints: Eleventy + Nunjucks + Vite stack; avoid regressions in existing demos pipeline.
- Data/privacy constraints: No confidential client metrics; qualitative outcomes preferred unless explicitly safe.

## Key File Map
- Homepage: `src/index.njk`
- Case-study data: `src/_data/caseStudies.js`
- Case-study template: `src/_includes/partials/case-study-page.njk`
- Case-study pages: `src/case-studies/`
- Work cards: `src/content/work.json`
- Styles: `src/assets/styles/main.scss`

## Validation Checklist
- [x] `npm run build`
- [ ] Visual check homepage
- [ ] Visual check case studies
- [ ] Mobile check
- [ ] Links/CTAs check

## Handoff Summary
- What changed:
  - Homepage and nav repositioned to UX consultancy-first.
  - Work cards now point to proper case-study pages.
  - Reusable case-study system added (`caseStudies.js` + shared partial + wrappers).
  - FourJaw/Databowl/QuoteHound converted to common structure.
  - Case-study summary cards and bullet alignment visually standardized.
  - README updated with new architecture/workflow.
- What remains:
  - PR creation/merge.
  - Real asset replacement and final content polish.
  - Optional extraction of additional reusable components if needed.
- Risks:
  - Placeholder visuals may weaken credibility until replaced.
  - Qualitative outcomes are strong, but missing safe quantitative proxies where available.
