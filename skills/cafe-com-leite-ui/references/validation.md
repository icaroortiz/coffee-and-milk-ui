# Proportional validation

## Practical review

1. Choose a representative real task and a difficult state: a populated table, form error, open menu, long conversation, or equivalent. Use clearly identified local/mock data where real writes are outside the task.
2. Inspect the rendered result on desktop, an intermediate width, and narrow mobile (for example, 320 and 390 px). Check supported themes. For small changes, focus on the component and affected regions rather than retesting the whole product.
3. Follow the primary task with keyboard and touch/click. Check focus, labels, selection, disabled/loading behavior, and overlay dismissal/focus return.
4. Inspect long content, zoom, and software-keyboard behavior where relevant. Check the last action, fixed bars, and safe areas.
5. Check actual color pairs, boundaries without shadows, forced-colors behavior, and reduced motion when affected. Automated tools support this review; one score does not prove the whole experience.
6. Run the build, typecheck, lint, or behavioral tests appropriate to the change. Avoid tests that merely repeat CSS constants. Reuse valid evidence; repeat checks when changes, failures, or concrete uncertainty justify it.

## Acceptance criteria

- The task and primary action are clear; the finish does not compete with content.
- Components within scope and their overlays use coherent tokens. Unrelated surfaces remain unchanged.
- Fields and actions remain recognizable without shadows; focus and status are legible.
- No accidental page-wide horizontal scrolling, clipped controls, or covered mobile actions.
- Intentional table/kanban panning is contained, discoverable, and accessible.
- Relevant empty, loading, and error states provide a useful next action without invented metrics or success claims.
- Existing functionality, permissions, data, and business rules are preserved.

## Scenarios for evaluating the skill

Use realistic tasks without suggesting the expected implementation to an independent reviewer. Review the resulting decisions or artifacts, not only whether they repeat the skill's wording.

- A warm burgundy dashboard using Tailwind 3, HSL-channel tokens, Radix dialogs, and a dense 200-row table.
- A request to refine only one settings modal while leaving the surrounding dashboard untouched.
- A mobile/PWA chat with an open software keyboard and fixed bottom navigation.
- An existing approved direction that now needs application to a second screen.

Review for brand and stack preservation, contained scope, appropriate density, portal theme consistency, usable touch/keyboard behavior, and no redundant approval gate. Static instruction review alone is not an executed application test.

## Delivery record

Briefly state what changed, what was observed, and any concrete limitation. Distinguish screenshots/fixtures, local interaction, viewport emulation, physical devices, and production. The bundled material preview demonstrates CSS; it does not validate a consuming application's shadcn/ui behaviors or certify accessibility.

After approval, reuse the established tokens and valid evidence. Broaden testing only when the new change or an observed issue warrants it.
