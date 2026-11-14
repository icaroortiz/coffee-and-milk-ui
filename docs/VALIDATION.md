# Validation record

**Package:** Café com Leite UI `0.1.0`

**Date:** 2026-11-14

**Scope:** local package validation and public deployment verification for the community release.

## Environment and scope

- Chrome 157.0.8103.78, running locally on macOS in an isolated headless browser.
- Viewport emulation at 1280 × 1000, 390 × 844 and 320 × 700 for both examples.
- Node.js 24.18.0 and npm 11.16.0 for the React example.
- React/shadcn example with pinned dependencies and Tailwind CSS 3.4.19. Tailwind 4 guidance is a compatibility recipe, not a second tested build.
- Fictional data only. No production system, external API, authentication, payment, customer data or installed personal skill was changed.

## Package checks

- The skill passed Codex's `quick_validate.py` frontmatter and scaffold validation.
- English instructions, reference links and Codex metadata were reviewed.
- English and Portuguese READMEs provide installation, examples and scope.
- MIT license included in both the repository root and the installable skill folder.
- Copied shadcn component source retains its MIT notice and a full license copy. See [third-party notices](../THIRD_PARTY_NOTICES.md).
- The distribution excludes `node_modules`, `dist`, private files and development logs.

## Rendered examples

| Example | Viewport | Theme / brand | Page overflow | axe violations* | Page errors |
| --- | --- | --- | --- | --- | --- |
| Static gallery | 1280 × 1000 | Light / burgundy | None | 0 | 0 |
| Static gallery | 390 × 844 | Light / burgundy | None | 0 | 0 |
| Static gallery | 320 × 700 | Dark / teal | None | 0 | 0 |
| React + shadcn | 1280 × 1000 | Light / burgundy | None | 0 | 0 |
| React + shadcn | 390 × 844 | Light / burgundy | None | 0 | 0 |
| React + shadcn | 320 × 700 | Dark / teal | None | 0 | 0 |

*axe-core automated checks tagged `wcag2a`, `wcag2aa` and `wcag21aa`. Zero detected violations is not an accessibility certification.

Screenshots were inspected for hierarchy, text wrapping, control placement and consistency. The mobile gallery places the next-session detail below the main copy to avoid squeezing the heading. Mobile icon buttons keep accessible names. Theme changes avoid intermediate low-contrast text colors.

| Gallery | React + shadcn |
| --- | --- |
| [Desktop](images/gallery-desktop.png) | [Desktop](images/react-desktop.png) |
| [Mobile](images/gallery-mobile.png) | [Mobile](images/react-mobile.png) |
| [Dark, 320 px](images/gallery-dark.png) | [Dark, 320 px](images/react-dark.png) |

## Verified interactions

- Gallery: filtering, empty-state recovery, switching product and theme, opening details, closing with Escape and returning focus to the trigger.
- React: dark/teal theme reaches the body portal; modal fits the 320 px viewport; keyboard focus remains in the modal.
- React: submitting empty required fields identifies both errors and focuses the first invalid field; the invalid state passes the scoped automated accessibility check.
- React: valid submission shows a local pending state with the submit button disabled, adds one record, reports success and returns focus. Cancellation does not add a record.
- React: search, empty-state recovery and clear work after the dialog restores focus. Reloading resets added appointments.
- React: reduced-motion disables the modal entrance animation; Escape closes it. Dialog geometry and scoped axe checks also passed at 768 and 1280 px.

## Build

`npm run typecheck` and `npm run build` passed. Final production output recorded by Vite: CSS 26.86 kB (gzip 6.79 kB); JavaScript 299.01 kB (gzip 94.83 kB). These are example bundle sizes, not a performance score or a production-app budget.

Dependency installation reported zero npm vulnerabilities at the time of installation. This is a point-in-time result, not a security audit.

## Limits of this review

- No physical iPhone, Android, Safari, software keyboard or installed PWA was tested. Viewport emulation does not validate those environments.
- No complete assistive-technology audit, user study or performance benchmark was performed.
- The examples demonstrate local UI behavior. The brief pending state is simulated; appointments reset on reload and need real server validation and persistence in a production application.
- Skill structure and scenarios were reviewed, but no broad benchmark across coding agents, frameworks or niches is claimed.
- The public checks below cover the deployed examples, not a production backend or third-party agent marketplace.

## Resumo em português

Pacote e exemplos preparados localmente. Layouts conferidos em desktop e telas de 390 e 320 px, com claro/escuro, sem rolagem lateral e sem violações detectadas nos testes automatizados descritos. Formulário, foco e modal foram conferidos no navegador. Build e validação estrutural da skill passaram. Isso não representa teste em aparelho físico, certificação de acessibilidade ou validação de backend.


## Public deployment — 2026-11-14

- Public repository: [icaroortiz/cafe-com-leite-ui](https://github.com/icaroortiz/cafe-com-leite-ui), with MIT detected, issue templates, repository topics and private vulnerability reporting enabled.
- [CI run 43600741889](https://github.com/icaroortiz/cafe-com-leite-ui/actions/runs/43600741889) passed the repository checks, locked dependency installation, React type-check/build and release packaging.
- [Pages run 43600741784](https://github.com/icaroortiz/cafe-com-leite-ui/actions/runs/43600741784) deployed the examples from commit `6e0b437` successfully.
- [Gallery](https://icaroortiz.github.io/cafe-com-leite-ui/) and [React example](https://icaroortiz.github.io/cafe-com-leite-ui/react/) returned HTTP 200 and were inspected in isolated Chrome at 1280 and 320 px. No horizontal page overflow, JavaScript page errors or failed HTTP responses were observed.
- The deployed gallery link opens the React example at the correct GitHub Pages subpath. Both mobile dialogs fit within the 320 × 700 viewport and close with Escape. Theme switching was exercised; the React example also switched to its teal palette.
- Release archives are generated from the source allowlist, checked for ZIP integrity and accompanied by SHA-256 checksums. They exclude dependencies, build output and development artifacts.

**Em português:** repositório e exemplos publicados no GitHub. CI e publicação do Pages passaram. As duas demonstrações foram conferidas no endereço público em desktop e 320 px, incluindo tema e modal. Os limites dos testes locais descritos acima continuam válidos.
