# Design system and experience

## Context before material

Identify what the user needs to do or decide. A calendar, chat, and financial dashboard need different densities. Preserve the product's vocabulary and mental model; a common finish should connect screens without turning them into the same layout.

For each delivery, briefly establish brand, priority task, devices, existing themes, and excluded regions. Avoid transplanting shell dimensions or marketing copy from a reference product.

## Tokens and color

Use primitive → semantic → component layers when the project's scale warrants them. For a small product, semantic CSS variables and a few explicit variants are sufficient.

| Role | Optional light preset | Optional dark preset |
| --- | --- | --- |
| Canvas | Blue-gray `#e8edf3` | Graphite `#20242b` |
| Surface | Ice `#f5f7fa` | Raised graphite `#282d35` |
| Main text | `#172438` | `#f2f5fa` |
| Secondary text | `#526174` | `#aebbd0` |
| Primary action | Blue `#0756e8` with white | Blue `#8bb7ff` with dark text |

These are starting values, not brand requirements. A burgundy or forest-green product should retain its identity. Choose the foreground for the actual fill; white text is not automatically suitable for every accent.

Useful semantic roles: canvas, surface, inset, foreground, muted-foreground, primary/on-primary, selected/on-selected, border, control-border, focus, and success/warning/danger with their foregrounds. A secondary brand color is welcome when it has a consistent role. Explain status through text or icons as well as color.

The optional preset uses `--sui-*` and `[data-soft-ui]` to limit collisions. Bridge these to the project's tokens or incorporate values into its existing theme. Avoid two competing sources for a color or theme preference.

## Depth and boundaries

| Material | Use | Treatment |
| --- | --- | --- |
| Flat | Canvas, table rows, messages, interior content | Space, alignment, and restrained separators |
| Raised | Main panels and outer groups | Diffuse dark shadow, opposite light edge, subtle border |
| Inset | Search and selected inputs | Light inner shadows and a recognizable boundary |
| Overlay | Dialog, menu, popover | Legible opaque surface and separation shadow |

Use an elevation budget: raise the main groups, not every descendant. One surrounding panel is often enough for a dense table or editor. A nearby elevated card does not require every input to have relief. Input boundaries must remain identifiable when shadows are unavailable.

In dark themes, reduce edge light rather than adding a strong white glow. Use transparency only where the backdrop preserves readability; blur does not guarantee contrast.

## Rhythm, typography, and density

- Use a consistent spacing scale; a 4 px base with 8, 12, 16, 24, and 32 px steps is a useful starting point. Proximity should communicate relationships.
- Start around 10–12 px radii for controls and 16–24 px for panels. Use pills selectively for filters, badges, or appropriate actions.
- Preserve the brand font. Otherwise prefer a readable interface font already available or a system stack. Do not depend on a proprietary font installed only on the author's machine.
- Body text is commonly 14–16 px. Use 16 px for mobile text inputs where needed to avoid involuntary zoom. Secondary text must remain readable.
- Workspace titles describe tasks and hierarchy. Do not fill operational screens with promotional headlines. Use tabular numerals where value alignment matters.
- Keep one icon family with consistent size and stroke. Icon-only controls need accessible names; a tooltip is not a substitute.
- Wrap or truncate long content according to the task, retaining access to the full value. Never hide essential form input.
- For frequent operational work, prioritize scanning and stable row alignment. For onboarding, give the next step more emphasis. Neither case requires a decorative metric dashboard.

## States and accessibility

Distinguish interaction states (hover, focus, selected, disabled, invalid) from operational states (loading, empty, error, success).

- Provide visible keyboard focus and coherent traversal. Actions must not depend on hover alone.
- Prevent duplicate submissions during loading, retain control size, and communicate progress with appropriate semantics such as `aria-busy`.
- Errors preserve entered data and offer a recovery action. Success confirms the result without unexpected scrolling.
- Use native semantics or appropriate ARIA: `aria-pressed` for toggle buttons, `aria-selected` for tabs, and `aria-invalid` for invalid inputs. A pressed appearance does not supply semantics.
- Measure contrast against the actual rendered background: target at least 4.5:1 for ordinary text and 3:1 for large text and essential graphical controls. Meeting these ratios alone does not certify an interface's accessibility.
- In `forced-colors`, use system borders and outlines instead of relying on shadows. Selection and focus must remain distinguishable.
- Portaled dialogs and menus need the correct theme context, through a common ancestor or a deliberate portal container. Preserve focus trapping and return to the trigger where appropriate.

## Mobile and PWA

Design for touch, not just a narrower viewport. Aim for approximately 44 × 44 px primary touch targets; slim visuals can still have larger hit areas.

Use `min-width: 0` on relevant flex/grid children. A table or kanban may have intentional, discoverable, contained horizontal scrolling. The entire page should not slide sideways accidentally. Global `overflow-x: hidden` is not a layout repair.

Reserve the height of fixed controls plus `env(safe-area-inset-bottom)` in the content. Check the software keyboard and last field/action; oversized fixed headers and footers must not consume the usable chat or form. Use dynamic viewport units where compatible with the application.

Simplify expensive effects on mobile. Support zoom, orientation changes, and larger text. A 390 px emulation does not prove physical Safari or installed-PWA behavior.

## Motion and performance

Use roughly 140–220 ms transitions for feedback, favoring opacity and small transforms when useful. Selecting a control should not shift the whole page.

Honor `prefers-reduced-motion`. Do not make useful content wait behind entrance animations. Avoid loops, parallax, and 3D without a task-related benefit.

Shadows need CSS, not an animation dependency. Reserve image and skeleton dimensions, lazy-load appropriate offscreen images, and preserve contrast over photography. Avoid repeated expensive effects in long lists.
