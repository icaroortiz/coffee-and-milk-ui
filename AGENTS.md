# Working on Café com Leite UI

These instructions are for agents **maintaining this repository**. To apply the visual system to another product, read [`skills/cafe-com-leite-ui/SKILL.md`](skills/cafe-com-leite-ui/SKILL.md) instead. Do not restyle unrelated projects merely because this repository is open.

## Repository map

- `skills/cafe-com-leite-ui/`: the installable skill, optional scoped CSS, and focused references. The canonical skill language is English.
- `examples/gallery/`: a dependency-free visual gallery with fictional studio and operations data.
- `examples/react-shadcn/`: a runnable React example using actual shadcn/Radix components, Tailwind CSS 3, and a pinned npm lockfile.
- `docs/`: AI integration guidance, screenshots, and dated validation evidence.
- `README.md` and `README.pt-BR.md`: public setup and usage in English and Portuguese.
- `THIRD_PARTY_NOTICES.md`: attribution for copied component source; retain the included licenses.

## Change the smallest useful thing

- Preserve the distinction between agent guidance, optional CSS, and demonstration code. This is not a published React component library or a universal theme.
- Let the consuming product keep its brand, stack, density, and behavior. Café com Leite is the name, not a required color palette.
- Keep `SKILL.md` focused on decisions; put conditional details in the relevant reference. Avoid adding a universal rule for one example's workaround.
- Keep both READMEs consistent when setup, scope, or usage changes. Write documentation directly; the visual skill does not impose a special prose style.
- Keep CSS scoped. Preserve accessible names, visible focus, theme inheritance through portals, and underlying component contracts.
- Use fictional examples and original or properly licensed assets. Never add credentials, real customer records, personal filesystem paths, or private application source.
- Do not replace an installed personal skill or publish a release unless that action is within the current user's authorization.

## Local checks

For the static gallery, run from the repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/examples/gallery/`.

For the React example, use the Node version declared in its `package.json`:

```sh
cd examples/react-shadcn
npm ci
npm run typecheck
npm run build
npm run dev
```

Use the scripts and workflows present in the checkout for repository and release checks. Do not assume that a globally installed tool or another project's `node_modules` exists.

Choose checks proportional to the change. Documentation changes need link and consistency review; interface changes also need a rendered check and the affected interaction. For relevant UI work, inspect narrow layouts, supported themes, focus, validation, and overlays. Reuse valid evidence rather than repeating unrelated tests.

## Report evidence accurately

Distinguish local examples, simulated data, viewport emulation, physical-device checks, CI, and live publication. A build is not visual validation. Preserve dated validation records; add new results without implying that old tests were rerun. State concrete gaps without inventing compatibility, accessibility certification, popularity, or production readiness.
