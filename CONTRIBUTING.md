# Contributing

Contributions in **English and Brazilian Portuguese** are welcome. Start with a real interface problem and a focused improvement.

## Good places to help

- A design instruction that helps an agent make a better implementation decision.
- A reproducible theme, keyboard, layout or component-integration defect.
- A small example that adapts the material to another product or density.
- A clearer explanation or translation kept consistent with its source.

For a substantial new direction, open an issue before building a large addition. Avoid new dependencies solely for shadows, hover effects or a screenshot.

## Report an issue

Describe what you expected, what happened and how to reproduce it. Include the affected example, viewport, theme and relevant version. For visual issues, add a screenshot with fictional or redacted data.

State whether the result comes from viewport emulation or a physical device. For security reports, use the repository's private vulnerability reporting channel when available rather than posting credentials or exploit details publicly.

## Make a change

1. Fork the repository and create a focused branch.
2. Read [AGENTS.md](AGENTS.md) for the repository map and implementation boundaries.
3. Keep the change small and preserve existing component behavior.
4. Exercise the affected example and record the relevant checks.
5. Open a pull request with the problem, resulting behavior and validation evidence.

The canonical skill instructions are in English. Update both READMEs when changing installation, scope or usage. Keep detailed recipes in `references/` instead of turning `SKILL.md` into a general frontend handbook.

## Validate

From the repository root:

```sh
python3 scripts/check_repository.py
npm --prefix examples/react-shadcn ci
npm --prefix examples/react-shadcn run typecheck
npm --prefix examples/react-shadcn run build
```

Use the [local example instructions](README.md#run-locally) to inspect the rendered result. For visual changes, include desktop and relevant mobile screenshots. Check keyboard focus, themes and error/empty states affected by the change. The [skill's validation guide](skills/cafe-com-leite-ui/references/validation.md) helps choose checks proportional to the work.

A successful build is not visual approval. An automated accessibility result does not establish complete accessibility or device coverage. Record any concrete limitation; do not invent test results.

## Content and licensing

Use fictional sample data. Do not submit credentials, private customer information, personal filesystem paths or proprietary assets without permission. Preserve third-party license notices and identify the source of included external code.

Original contributions are submitted under the project's [MIT License](LICENSE). Keep the license inside the installable skill folder as well as the repository root.

## Em português

Descreva o problema real e mantenha a alteração focada. Abra uma issue antes de construir mudanças grandes de direção. Confira a interface e o comportamento afetados, informe se usou emulação ou aparelho físico e inclua evidências na pull request.

Ao alterar instalação, escopo ou uso, atualize os dois READMEs. Preserve funcionalidades, dados, acessibilidade e avisos de licença. Contribuições originais seguem a licença MIT do projeto.
