# Café com Leite UI

![Café com Leite UI — orientação de Soft UI para agentes de programação](docs/images/banner.svg)

### O essencial de uma interface bem pensada, para o dia a dia.

[![CI](https://github.com/icaroortiz/cafe-com-leite-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/icaroortiz/cafe-com-leite-ui/actions/workflows/ci.yml)
[![Versão 0.1.0](https://img.shields.io/badge/version-0.1.0-82334f)](CHANGELOG.md)
[![Licença MIT](https://img.shields.io/badge/license-MIT-176b55)](LICENSE)

[Galeria online](https://icaroortiz.github.io/cafe-com-leite-ui/) · [Demo React + shadcn](https://icaroortiz.github.io/cafe-com-leite-ui/react/) · [Baixar v0.1.0](https://github.com/icaroortiz/cafe-com-leite-ui/releases/tag/v0.1.0) · [Integração com IA](docs/AI-INTEGRATION.md) · [English](README.md)

Uma **skill reutilizável para agentes de programação criarem dashboards e áreas internas**. Traz hierarquia clara, profundidade discreta de Soft UI, cores coerentes e orientações práticas de **shadcn/ui + Tailwind** para o projeto que você já tem.

**O nome é brasileiro. A paleta é do seu produto.**

![Dashboard de agenda em vinho construído com Café com Leite UI](docs/images/gallery-desktop.png)

## Uma base, com espaço para a sua marca

| Princípio | O que muda na prática |
| --- | --- |
| Estrutura antes da decoração | A tarefa, a ordem de leitura e a ação principal orientam o layout. |
| Profundidade com medida | Grupos elevados e controles rebaixados; tabelas densas e chats ficam mais planos. |
| Um acabamento, marcas diferentes | Tokens semânticos se adaptam à sua paleta, densidade e linguagem. |
| Comportamento preservado | Mantenha componentes, foco, permissões e regras de negócio existentes. |

Este pacote reúne **uma skill, CSS opcional e exemplos funcionais**. Não é uma biblioteca de componentes, um template fixo de dashboard ou um motivo para trocar sua stack. Seu melhor ponto de partida são áreas de trabalho, administração e produtos operacionais. Páginas de marketing precisam de uma direção própria.

## Comece por aqui

Clone o repositório:

```sh
git clone https://github.com/icaroortiz/cafe-com-leite-ui.git
cd cafe-com-leite-ui
```

### Instalar no Codex

Copie a pasta completa da skill, incluindo licença e referências:

```sh
skill_root="${CODEX_HOME:-$HOME/.codex}/skills"
skill_target="$skill_root/cafe-com-leite-ui"
if [ -e "$skill_target" ]; then
  printf 'Já existe: %s — compare antes de substituir.\n' "$skill_target"
else
  mkdir -p "$skill_root" && cp -R skills/cafe-com-leite-ui "$skill_target"
fi
```

Abra uma nova conversa no Codex e use:

```text
Use $cafe-com-leite-ui para refinar este dashboard.
Preserve nossa marca, as funcionalidades e a stack atual. Prepare uma tela
representativa e um estado importante de erro ou vazio antes de ampliar
a direção. Confira desktop, celular e os temas disponíveis.
```

O comando preserva uma instalação existente. Se o cliente não identificar a skill, informe explicitamente o caminho do `SKILL.md` instalado.

### Usar com outro agente de programação

Mantenha a pasta da skill no seu workspace e peça ao agente para ler `skills/cafe-com-leite-ui/SKILL.md`, seguido apenas das referências relevantes à tarefa. Não pressupomos descoberta automática em outros clientes. O [guia de integração](docs/AI-INTEGRATION.md) inclui prompts reutilizáveis, orientações de tokens e um fluxo de adoção por etapas.

## O que vem no pacote

| Recurso | Para que serve |
| --- | --- |
| [Skill](skills/cafe-com-leite-ui/SKILL.md) | Instruções focadas e leitura progressiva das referências. |
| [Sistema visual](skills/cafe-com-leite-ui/references/design-system.md) | Cor, relevo, densidade, estados, mobile e movimento. |
| [Receitas shadcn](skills/cafe-com-leite-ui/references/shadcn-recipes.md) | Componentes existentes, formatos de tokens e temas em portais. |
| [Preset CSS](skills/cafe-com-leite-ui/assets/soft-ui.css) | Superfícies claro/escuro opcionais, com escopo próprio. |
| [Galeria visual](examples/gallery/) | Agenda em vinho e operação em verde-petróleo, sem etapa de build. |
| [Exemplo React](examples/react-shadcn/) | Componentes reais do shadcn, formulário validado e modal com tema. |

Todos os dados são fictícios. As ações das demos são locais; não há autenticação, pagamentos ou backend conectados.

<details>
<summary><strong>Prévias mobile e de tema escuro</strong></summary>

<p>
  <img src="docs/images/gallery-mobile.png" width="280" alt="Dashboard do estúdio em uma tela estreita de celular" />
  <img src="docs/images/gallery-dark.png" width="230" alt="Dashboard de operações com tema escuro" />
</p>

</details>

## Rodar localmente

**Galeria estática:** na raiz do repositório:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Abra [localhost:8765/examples/gallery](http://127.0.0.1:8765/examples/gallery/). A skill instalável também inclui uma [amostra pequena de materiais](skills/cafe-com-leite-ui/assets/material-preview.html).

**React + shadcn:** use Node.js 22.12 ou mais recente:

```sh
cd examples/react-shadcn
npm ci
npm run dev
```

O [README do exemplo](examples/react-shadcn/README.md) descreve as versões fixadas, as interações e os dados mantidos somente em memória.

## Qualidade e verificações

Na raiz do repositório:

```sh
python3 scripts/check_repository.py
npm --prefix examples/react-shadcn ci
npm --prefix examples/react-shadcn run typecheck
npm --prefix examples/react-shadcn run build
```

Os exemplos iniciais foram conferidos no Chrome em desktop e larguras de 390/320 px, incluindo temas escuros, validação do formulário, foco por teclado e comportamento do modal. Consulte o [registro de validação](docs/VALIDATION.md) para os resultados e limites. Esses testes não representam cobertura em aparelhos físicos nem certificação completa de acessibilidade.

O exemplo usa **Tailwind 3**. As orientações também discutem compatibilidade de tokens, mas não afirmam que todas as versões de frameworks, shadcn ou Tailwind foram testadas.

## Contribuir

Comece por um problema de interface, uma alteração pequena e evidência de que o resultado funciona. Contribuições em português e inglês são bem-vindas.

- [Guia de contribuição](CONTRIBUTING.md)
- [Instruções do repositório para agentes de IA](AGENTS.md)
- [Changelog](CHANGELOG.md)

## Origem e licença

Criada por [Ícaro Ortiz](https://github.com/icaroortiz), a partir do trabalho prático na interface da Tocwise, e adaptada para outros produtos.

O [Neomorphism Metric Card de Arun Dass](https://21st.dev/@arunjdass/components/neomorphism-metric-card) é uma referência visual para sombras suaves e luz nas bordas. Seu código, screenshots e assets não são redistribuídos aqui. O exemplo React inclui componentes oficiais do shadcn com a licença preservada.

O material original está disponível sob a **[licença MIT](LICENSE)**. Consulte os [avisos de terceiros](THIRD_PARTY_NOTICES.md). Este é um projeto independente, sem vínculo oficial com shadcn/ui, Tailwind ou 21st.dev.
