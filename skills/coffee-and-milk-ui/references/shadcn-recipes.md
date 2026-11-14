# shadcn/ui and Tailwind integration

## Inspect before changing

Check `package.json`, `components.json` when present, aliases, theme files, and existing component implementations. Identify the Tailwind version, token format, and underlying primitives. Preserve installed Radix or other component foundations rather than replacing them automatically.

shadcn/ui provides a composition and behavior foundation, not a visual ceiling. Customize tokens and variants while retaining forms, focus, refs, events, and accessibility. Do not overwrite customized components with a generator or install a second Dialog/Menu system just for styling.

Consult official documentation matching the project's version when needed: [Theming](https://ui.shadcn.com/docs/theming) and [Components](https://ui.shadcn.com/docs/components). The optional CSS is framework-independent; its presence does not establish that a project has shadcn/ui installed.

## Token bridge

The following partial bridge is for projects whose variables accept **complete CSS colors**. Complete only the additional roles the application uses, including destructive, sidebar, and chart tokens.

```css
[data-soft-ui] {
  --background: var(--sui-canvas);
  --foreground: var(--sui-ink);
  --card: var(--sui-surface);
  --card-foreground: var(--sui-ink);
  --popover: var(--sui-surface);
  --popover-foreground: var(--sui-ink);
  --primary: var(--sui-primary);
  --primary-foreground: var(--sui-on-primary);
  --secondary: var(--sui-surface);
  --secondary-foreground: var(--sui-ink);
  --muted: var(--sui-inset);
  --muted-foreground: var(--sui-muted);
  --accent: var(--sui-selected);
  --accent-foreground: var(--sui-on-selected);
  --border: var(--sui-border);
  --input: var(--sui-control-border);
  --ring: var(--sui-focus);
}
```

Legacy consumers such as `hsl(var(--background))` expect HSL channels: inserting a hex color into that contract breaks it. Convert the values to channels or adapt consumers consistently. Tailwind 3 and 4 register tokens differently; use the existing configuration without migrating versions for this skill.

The preset demonstrates light/dark themes with `data-sui-theme`; an app may use `.dark`, a provider, or another contract. Connect to that mechanism instead of adding a second theme preference. Resolve the initial preference before painting using the framework's existing approach, avoiding wrong-theme flashes and hydration mismatches.

## Portals and scoped changes

Preset classes support the element bearing `data-soft-ui` and its descendants. A theme attribute on the shell does not reach a portal outside that shell. For a single dialog, apply the opt-in and resolved theme to its content or deliberate portal container:

```tsx
<DialogContent
  data-soft-ui
  data-sui-theme={resolvedTheme}
  className="sui-overlay"
>
  {/* Keep the existing title, description, fields, and actions. */}
</DialogContent>
```

`resolvedTheme` means the application's current light/dark value, not an unrelated new state variable. Preserve all other required props and structure. Nested menus/popovers portaled elsewhere also need the same resolved tokens; choose the common theme boundary appropriate to the requested scope.

For a one-modal task, adjust that modal and its own overlays. Do not restyle the sidebar, dashboard, or public website to satisfy system-wide consistency.

## Variants by role

Prefer semantic classes or typed variants using the project's existing tools, such as `cva`. Avoid fragile product-specific chains or positional selectors like `button:last-child`.

| Component | Material | Preserve |
| --- | --- | --- |
| Shell / Sidebar | Continuous canvas, restrained groups, clear active item | Collapse, navigation, keyboard, mobile behavior |
| Card / KPI | Raised panel; vivid fill only for priority | Real data, states, identifiable action |
| Input / Search | Soft inset with a visible boundary | Label, errors, autofill, keyboard, clear action |
| Button | Solid primary, neutral secondary, restrained ghost | Loading, disabled, focus, touch area |
| Tabs / Filters | Persistent selection and legible counts | Correct tab versus filter semantics |
| Table / List | Flat rows, alignment, subtle separators | Sorting, selection, pagination, responsive access |
| Dialog / Sheet / Menu | Coherent theme, padding, and radius | Portal behavior, focus, dismissal |
| Badge / Status | Semantic color pair, text, useful icon | Meaning without relying on color |
| Kanban | Consistent stage colors and legible cards | Dragging, keyboard/touch alternative, contained scrolling |
| Chat | Simple bubbles and compact hierarchy | Reachable composer with keyboard open; stable history |

A card with a primary link and secondary buttons must not be an enclosing `<button>` or `<a>` around those controls. Compose separate actions. With `asChild` or an equivalent API, preserve refs and the final element's semantics.

## Adaptation examples

- **Warm burgundy brand:** retain warm neutrals, use burgundy for appropriate actions and selection, and verify foreground contrast. The blue preset is optional.
- **A 200-row table:** raise the outer group and keep rows flat. Preserve useful density rather than introducing 200 double-shadow cards.
- **Mobile chat:** prioritize messages and composer. Keyboard and history scrolling are part of the layout, not post-styling fixes.
- **Customizable public pages:** isolate the internal theme. Overlays within a public page must inherit that page's appropriate context without changing unrelated routes.
- **Non-React project:** map the tokens and materials to existing controls. The skill is not a reason to rewrite the application in React.

## External reference

[Neomorphism Metric Card — Arun Dass / 21st.dev](https://21st.dev/@arunjdass/components/neomorphism-metric-card) informs edge lighting and shadows. The supplied CSS is original; it does not include that component's code, images, or fonts. Check the relevant license before later incorporating external material and retain mandatory notices without adding optional promotional credits to product screens.
