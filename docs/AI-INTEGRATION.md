# Integrating with an AI coding agent

[English README](../README.md) · [README em português](../README.pt-BR.md) · [Skill entrypoint](../skills/cafe-com-leite-ui/SKILL.md)

Use Café com Leite UI as design and implementation guidance inside the project you are working on. It does not need a model API, service account, package registry or remote runtime.

## Choose the right entrypoint

| What you are doing | Read first |
| --- | --- |
| Applying this visual approach to your own product | [`skills/cafe-com-leite-ui/SKILL.md`](../skills/cafe-com-leite-ui/SKILL.md) |
| Contributing to this repository | [`AGENTS.md`](../AGENTS.md), then [`CONTRIBUTING.md`](../CONTRIBUTING.md) |
| Trying a runnable integration | [`examples/react-shadcn/README.md`](../examples/react-shadcn/README.md) |

`AGENTS.md` describes work on this repository. Do not copy it into an unrelated product as a replacement for that project's instructions. The reusable design skill is the folder under `skills/`.

## Codex

Use the installation command in the [README](../README.md#install-in-codex), then start a new conversation and invoke `$cafe-com-leite-ui`.

The installed folder contains everything the skill references: instructions, design recipes, the optional material preset and the MIT license. Preserve this structure when copying or distributing it.

If discovery is unavailable, provide the path to `SKILL.md` explicitly. The `agents/openai.yaml` file supplies Codex display metadata; the Markdown is the canonical guidance.

## Other coding agents

Place the skill folder in a location the agent can read, such as `design-skills/cafe-com-leite-ui/` inside your project. Then make an explicit request:

```text
Read design-skills/cafe-com-leite-ui/SKILL.md and apply it to this task.
Follow this project's existing instructions and keep the requested scope.
Read the linked references only when they help with the implementation.
```

Adjust the path to where you copied it. This is a manual integration pattern, not a claim that another assistant automatically discovers this repository or supports Codex metadata. Use that client's documented project-instruction mechanism if you want persistent discovery.

## Load the relevant guidance

Start with `SKILL.md`. It routes to the details below; there is no need to load the entire repository into every prompt.

| Reference | Use it when |
| --- | --- |
| [`design-system.md`](../skills/cafe-com-leite-ui/references/design-system.md) | Establishing tokens, surface materials, density, mobile behavior or motion. |
| [`shadcn-recipes.md`](../skills/cafe-com-leite-ui/references/shadcn-recipes.md) | Integrating existing shadcn components, portaled overlays or token formats. |
| [`validation.md`](../skills/cafe-com-leite-ui/references/validation.md) | Choosing proportionate checks for the changed interface. |
| [`soft-ui.css`](../skills/cafe-com-leite-ui/assets/soft-ui.css) | Adapting the optional CSS preset into a project. |

The preset uses `[data-soft-ui]`, `data-sui-theme` and `--sui-*` variables to keep its surface styles scoped. Map them into the application's existing theme rather than creating a competing theme system. Portaled dialogs must inherit the same theme as the page.

## Give the agent a useful brief

Specify the screen, audience, primary task, brand constraints and behavior that must stay intact. Name one difficult state worth testing, such as a long table, an empty conversation or an invalid form.

```text
Use $cafe-com-leite-ui on the scheduling screen only.

Audience: a small studio managing client sessions.
Primary task: see today's appointments and add a new session quickly.
Brand: preserve our burgundy palette, typeface and existing icons.
Stack: inspect the installed React, Tailwind and shadcn versions first.
Keep: routes, form behavior, API calls and permissions.
Check: an empty schedule, form errors, a long client name and the modal
in dark mode at a narrow mobile width.

Deliver a rendered preview, the changed files, checks performed and any
concrete limitation. Do not publish or change unrelated screens.
```

For an approved direction, replace the last sentence with the actual rollout scope and authorization. The skill does not add an extra approval step to work already approved.

### Prompt em português

```text
Use $cafe-com-leite-ui na tela de agenda deste projeto.

O usuário precisa encontrar os compromissos de hoje e criar um novo
agendamento com facilidade. Preserve nossa marca, fonte, ícones, rotas,
permissões e comportamento dos formulários. Confira a stack instalada.

Aplique superfícies suaves e uma hierarquia clara, mantendo as listas
densas mais planas. Use cor viva para a ação principal. Confira agenda
vazia, erros de formulário, nome longo, mobile e modal no tema escuro.

Entregue uma prévia renderizada e informe o que foi alterado e testado.
Não publique nem altere telas fora desse escopo.
```

## Adopt it in an existing application

1. **Inspect.** Find existing tokens, component variants, theme boundaries and relevant states.
2. **Map.** Assign canvas, surface, inset, text, borders, focus and semantic colors to the project's token system.
3. **Implement one useful slice.** Reuse the existing components and preserve their accessibility and behavior.
4. **Render and exercise.** Check the main task and its difficult state, including the actual portal or responsive layout involved.
5. **Extend the approved direction.** Reuse the validated tokens and components within the authorized scope.

A settings form needs a different layout from a chat. Adopting this skill does not mean adding a hero card, a chart, a fixed palette or a new sidebar to every screen.

## Know what has been validated

The included React example uses pinned dependencies and Tailwind 3. The references describe useful compatibility decisions; they are not a guarantee for every component version or coding agent. See the [validation record](VALIDATION.md).

The demonstration pending state and sample records are local UI behavior. Production persistence, scheduling rules and server validation belong to the application integrating the design.

## Em português

Instale a pasta completa no Codex ou indique explicitamente o `SKILL.md` ao agente que usa. Comece por uma tela real, preserve a identidade do seu produto e carregue apenas as referências necessárias. `AGENTS.md` serve para contribuir neste repositório; a skill dentro de `skills/` é o material reutilizável nos seus projetos.
