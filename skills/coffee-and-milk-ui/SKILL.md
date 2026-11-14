---
name: coffee-and-milk-ui
description: "Build or refine dashboards and internal tools with subtle Soft UI depth, coherent surfaces, and accessible controls. Use for this visual style or consistent application chrome, forms, and panels, especially with existing shadcn/ui and Tailwind projects. Adapt to the product's brand; do not automatically restyle public websites."
---

# Coffee & Milk UI

Create work interfaces with clear hierarchy, subtle depth, and a consistent finish. Let the user's task determine the layout and density; use surface treatments to support it. The name describes a dependable foundation, not a required coffee-colored palette.

This package provides **agent guidance and optional CSS**, not a prebuilt React component library or a drop-in theme for every stack. Adapt the recipes to the project's actual components and versions.

## Start with the product

1. Read local instructions and inspect the existing screen, stack, theme, and components. Identify the audience, primary task, information density, and requested boundaries.
2. Preserve functionality, data, routes, permissions, business rules, and useful work. A visual refinement does not require a stack migration.
3. In React projects, reuse installed shadcn/ui components, Tailwind conventions, and TypeScript when present. Preserve their underlying primitives, refs, focus behavior, and accessibility. In other frameworks, use existing native components.
4. Retain brand colors and semantic tokens. Blue is only the supplied preset. Do not introduce unrelated industry content, fabricated metrics or verification states, or a new product identity.
5. For a broad rollout, establish one representative screen and a difficult state first. Show a preview before extending an unapproved direction. If the direction is already approved, continue without repeating approval requests.

## Visual direction

- Start with a lightly tinted neutral canvas, nearby surface tones, high-contrast text, and a recognizable primary color.
- Use [Neomorphism Metric Card by Arun Dass](https://21st.dev/@arunjdass/components/neomorphism-metric-card) as a material reference: soft shadows, subtle edge light, and rounded volume. It is not a template to repeat across every region.
- Use flat content, raised groups, and lightly inset controls. Overlays have their own separation shadow. Keep tables, chats, and dense editors relatively flat.
- Reserve vivid fills for primary actions and priority information. Use semantic colors for states, with text or icons as well. Avoid assigning an unrelated bright color to every card.
- Define foreground/background pairs for each variant. A shadow alone must never indicate a field boundary, focus, selection, or error.
- Within the requested scope, give navigation, profile controls, searches, panels, filters, menus, and dialogs a coherent finish. Consistency does not require identical layouts or rounded pills everywhere.
- Prefer consistent icons over emoji controls. Keep motion short and purposeful, with reduced-motion support. 3D, parallax, and an animation library are optional, never prerequisites.

## Read only what the task needs

- [Design system](references/design-system.md): tokens, depth, density, accessibility, mobile, and motion.
- [shadcn/ui integration](references/shadcn-recipes.md): version compatibility, token formats, portal themes, and component recipes.
- [Validation](references/validation.md): proportional checks and realistic skill scenarios.
- [Optional CSS preset](assets/soft-ui.css): original, namespaced light/dark material. Integrate with the existing theme rather than creating a second theme system.
- [Material preview](assets/material-preview.html): a standalone browser sample of the CSS, not proof that a consuming application's components work.

## Implement within scope

1. Map colors, surfaces, shadows, type, spacing, and states to semantic tokens and explicit component variants.
2. Implement the requested component or screen. Change the shell only when it is part of the task. Make the primary action clear, group secondary actions, and remove repetition before adding decoration.
3. Preserve component contracts, form validation, events, refs, and accessibility props. Do not nest interactive controls inside buttons or links.
4. Inspect the rendered result on desktop and mobile, in supported themes. Check relevant long content, empty/error/loading states, focus, touch, and overlays.
5. Fix observed issues, then reuse the validated components. Avoid positional selectors and styles leaking into unrelated routes or public pages.
6. Document useful tokens, variants, and exceptions without producing a redundant component inventory.

## Implementation boundaries

- Keep mobile/PWA content reachable around safe areas, software keyboards, dynamic viewports, and fixed bars. Do not hide layout defects with root-level overflow clipping or transform/filter the shell in a way that changes fixed positioning.
- Use one theme source, including portaled dialogs and menus. Preserve user preference and avoid incorrect-theme flashes.
- Use CSS for simple surface effects. Avoid large dependencies, continuous shadow animation, and unbounded blur. Reserve image dimensions and retain existing delivery optimizations.
- Follow the task's existing authorization. This skill neither grants deployment or data-mutation permission nor adds an extra approval gate to work already authorized.
- Visual references do not grant redistribution rights. Check licenses before incorporating third-party code or assets and retain required notices.

## Deliver

Report the changed scope, preview location, relevant checks, and concrete limitations. Distinguish local implementation, mock data, viewport emulation, real-device checks, and production. A successful build is not visual validation.
