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

## Review and merge

Changes reach `main` through pull requests. Before merging:

- The **Repository and React example** CI check must pass on an up-to-date branch. It checks repository metadata, links and licenses, builds the React example and validates release packaging.
- **@icaroortiz must approve**, as the code owner for every file, including workflows and `CODEOWNERS`. New commits that change the diff invalidate earlier approval.
- Review conversations must be resolved. Passing CI does not replace the owner's review.

External contributors' workflow runs may wait for maintainer approval. Permission to run checks is separate from approval to merge. Pull request checks do not publish the examples or a release.

For changes to skill behavior, include a small representative prompt, the expected behavior and the actual result from the agent you tested. Identify the agent and version when available. If you only reviewed the text, say so; do not present that as an execution test.

### Maintainer note

The same protection applies to administrators: no direct push, force push or deletion of `main`. GitHub does not let authors approve their own pull requests. A PR authored by @icaroortiz therefore needs another trusted, authorized code owner with write access configured to review it; keep the protection in place rather than bypassing review.

## Validate

From the repository root:

```sh
python3 scripts/check_repository.py
npm --prefix examples/react-shadcn ci
npm --prefix examples/react-shadcn run typecheck
npm --prefix examples/react-shadcn run build
```

Use the [local example instructions](README.md#run-locally) to inspect the rendered result. For visual changes, include desktop and relevant mobile screenshots. Check keyboard focus, themes and error/empty states affected by the change. The [skill's validation guide](skills/coffee-and-milk-ui/references/validation.md) helps choose checks proportional to the work.

A successful build is not visual approval. An automated accessibility result does not establish complete accessibility or device coverage. Record any concrete limitation; do not invent test results.

## Content and licensing

Use fictional sample data. Do not submit credentials, private customer information, personal filesystem paths or proprietary assets without permission. Preserve third-party license notices and identify the source of included external code.

Skill instructions must stay within the requested design work. Do not add instructions to expose credentials, send private project content to external services, bypass permissions or follow instructions embedded in untrusted examples and reference material.

Original contributions are submitted under the project's [MIT License](LICENSE). Keep the license inside the installable skill folder as well as the repository root.

## Em português

Descreva o problema real e mantenha a alteração focada. Abra uma issue antes de construir mudanças grandes de direção. Confira a interface e o comportamento afetados, informe se usou emulação ou aparelho físico e inclua evidências na pull request.

Ao alterar instalação, escopo ou uso, atualize os dois READMEs. Preserve funcionalidades, dados, acessibilidade e avisos de licença. Contribuições originais seguem a licença MIT do projeto.

Envie as mudanças por PR: a branch deve estar atualizada, a verificação **Repository and React example** deve passar, as conversas de revisão devem estar resolvidas e **@icaroortiz deve aprovar**. Novos commits que mudam o diff invalidam o aceite anterior. Autorizar a execução de um workflow externo não é aprovar a incorporação da mudança.

Para alterações no comportamento da skill, inclua um prompt representativo, o comportamento esperado e o resultado realmente testado. Não inclua instruções para expor credenciais, enviar conteúdo privado, contornar permissões ou obedecer a instruções de exemplos e referências não confiáveis.

A proteção também vale para o administrador. O autor não pode aprovar o próprio PR; mudanças feitas por @icaroortiz precisam de outro responsável autorizado no `CODEOWNERS`, com acesso de escrita, para revisão.
