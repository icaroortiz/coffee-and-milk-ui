# Get started with Coffee & Milk UI

[Português](QUICKSTART.pt-BR.md) · [README](../README.md) · [AI integration guide](AI-INTEGRATION.md)

Install the skill once, then ask your AI agent to apply it in the project you choose. It guides design and implementation; it is not a React library that automatically restyles your interface.

## 1. Choose one installation method

### Through Codex chat

Paste this **into Codex chat**, not your terminal:

```text
$skill-installer install the skill at https://github.com/icaroortiz/coffee-and-milk-ui/tree/main/skills/coffee-and-milk-ui
```

Then invoke `$coffee-and-milk-ui` in your task. Codex detects newly installed skills automatically; restart Codex if it does not appear. [Official skills documentation](https://learn.chatgpt.com/docs/build-skills).

### Through your terminal

Alternatively, with **Node.js 22.20 or newer**, use Vercel's open-source `skills` CLI:

```sh
npx skills add icaroortiz/coffee-and-milk-ui --skill coffee-and-milk-ui --agent codex --global
```

`--global` makes the skill available across your projects. To install only in the current project, run the command inside it and omit `--global`. Choose one method to avoid duplicate installations. This CLI installs agent instructions; it does not add a visual dependency to your application. [Requirements and installation](https://github.com/vercel-labs/skills), [command options](https://github.com/vercel-labs/skills/blob/main/docs/commands.md).

## 2. Paste this prompt into your project

Optionally fill in **screen**, **audience**, and **brand**. Otherwise, the agent should use the existing project context.

```text
Use $coffee-and-milk-ui to refine this project's dashboard and internal workspace.

Optional context: screen [name]; audience [who uses it]; brand [colors and references].
Inspect the project first and infer established choices: stack, tokens,
components, audience, and primary task. Reuse shadcn/ui and Tailwind when
present; do not impose a stack migration.

Apply Soft UI with gentle neumorphism: a quiet canvas, restrained raised
surfaces, subtle edge highlights, and slightly inset fields. Preserve the
product's brand. Separate brand colors from semantic success, warning,
error, and information colors. Reserve vivid color for priorities and
keep lists and dense areas simple and readable.

Build clear hierarchy, consistent spacing, and one obvious primary action.
Harmonize the header, sidebar, profile, filters, buttons, menus, and dialogs
through reusable tokens and components. Preserve existing routes, features,
form behavior, permissions, and integrations.

Address contrast, visible focus, keyboard access, touch, and loading,
empty, error, and success states. On mobile and PWA, respect safe areas
and the keyboard; prevent page-wide horizontal scrolling and obscured
controls. Keep motion brief and respect reduced-motion preferences.

Start with one representative screen and a relevant state. Inspect the
rendered interface on desktop, mobile, and supported themes; present
the preview and checks before extending the approach to other screens.
Continue within the already authorized scope without adding extra
approval gates. Do not publish automatically.
```

## 3. Using another AI agent

Copy the **entire** `skills/coffee-and-milk-ui/` folder somewhere your tool can read, such as `design-skills/coffee-and-milk-ui/`. Preserve its files and relative reference paths. Replace the prompt's first line with:

```text
Read design-skills/coffee-and-milk-ui/SKILL.md and apply its guidance to this task.
```

If the tool cannot access local files or GitHub links, attach `SKILL.md` and the relevant references. Pasting the URL alone does not guarantee that Lovable or another agent loads the skill. For shadcn integration, optional CSS, and project adaptation, see the [integration guide](AI-INTEGRATION.md).

## Upgrading from Café com Leite UI

The project and skill were renamed in v0.2.0. Install `coffee-and-milk-ui` with one of the methods above and invoke `$coffee-and-milk-ui`. Once the new installation is available, remove the old `cafe-com-leite-ui` installation through the same installer, or move its folder outside your client's active skills directory. Keep any personal modifications before replacing it.

Update saved prompts and bookmarks. The demo now lives at [coffee-and-milk-ui](https://icaroortiz.github.io/coffee-and-milk-ui/). Existing copied CSS uses the same `[data-soft-ui]` scope and `--sui-*` tokens; your application does not need a theme migration. The v0.1.0 release remains archived under its original name.
