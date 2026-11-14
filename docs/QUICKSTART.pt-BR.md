# Comece com Café com Leite UI

[English](QUICKSTART.md) · [README](../README.pt-BR.md) · [Guia para agentes de IA](AI-INTEGRATION.md)

Instale a skill uma vez e peça à IA para aplicá-la no projeto desejado. Ela orienta o design e a implementação; não é uma biblioteca React que transforma a interface automaticamente.

## 1. Escolha uma forma de instalar

### Pelo chat do Codex

Cole **no chat do Codex**, não no terminal:

```text
$skill-installer instale a skill em https://github.com/icaroortiz/cafe-com-leite-ui/tree/main/skills/cafe-com-leite-ui
```

Depois, invoque `$cafe-com-leite-ui` na tarefa. O Codex detecta novas skills automaticamente; se ela não aparecer, reinicie o Codex. [Documentação oficial de skills](https://learn.chatgpt.com/docs/build-skills).

### Pelo terminal

Como alternativa, com **Node.js 22.20 ou superior**, use a CLI aberta `skills`, da Vercel:

```sh
npx skills add icaroortiz/cafe-com-leite-ui --skill cafe-com-leite-ui --agent codex --global
```

`--global` disponibiliza a skill para seus projetos. Para instalar somente no projeto atual, execute dentro dele e retire `--global`. Escolha uma das duas formas para evitar instalações duplicadas. Essa CLI instala instruções para agentes; não adiciona uma dependência visual à aplicação. [Requisitos e instalação](https://github.com/vercel-labs/skills), [opções do comando](https://github.com/vercel-labs/skills/blob/main/docs/commands.md).

## 2. Cole este prompt no projeto

Troque os campos opcionais se quiser: **tela**, **público** e **marca**. Se não os informar, a IA deve partir do contexto existente.

```text
Use $cafe-com-leite-ui para refinar o dashboard e a área interna deste projeto.

Contexto opcional: tela [nome]; público [quem usa]; marca [cores e referências].
Inspecione primeiro o projeto e infira o que já estiver definido: stack,
tokens, componentes, público e tarefa principal. Reutilize shadcn/ui e
Tailwind se estiverem presentes; não imponha uma migração de stack.

Aplique Soft UI com neomorfismo suave: fundo discreto, superfícies com
relevo contido, bordas iluminadas e campos levemente rebaixados. Preserve
a identidade da marca. Separe cores de marca das cores semânticas de
sucesso, atenção, erro e informação. Reserve cor viva para prioridades;
mantenha listas e áreas densas simples e legíveis.

Crie hierarquia clara, espaçamento consistente e uma ação principal
evidente. Harmonize cabeçalho, sidebar, perfil, filtros, botões, menus e
modais usando tokens e componentes reutilizáveis. Preserve rotas,
funcionalidades, formulários, permissões e integrações existentes.

Cuide de contraste, foco visível, teclado, toque e estados de carregamento,
vazio, erro e sucesso. No mobile e PWA, respeite áreas seguras e teclado,
evite rolagem horizontal da página e controles encobertos. Use animações
curtas e respeite a preferência por movimento reduzido.

Comece por uma tela representativa e um estado relevante. Confira a
interface renderizada no desktop, mobile e temas suportados; apresente
a prévia e os testes realizados antes de ampliar para outras telas.
Continue dentro do escopo já autorizado, sem criar aprovações extras.
Não publique automaticamente.
```

## 3. Usando outra IA

Copie a **pasta completa** `skills/cafe-com-leite-ui/` para um local que a ferramenta consiga ler, por exemplo `design-skills/cafe-com-leite-ui/`. Preserve os arquivos e caminhos relativos das referências. Troque a primeira linha do prompt por:

```text
Leia design-skills/cafe-com-leite-ui/SKILL.md e aplique suas orientações nesta tarefa.
```

Se a ferramenta não acessar arquivos locais ou links do GitHub, anexe o `SKILL.md` e as referências necessárias. Colar a URL, por si só, não garante que Lovable ou outra IA carregue a skill. Para detalhes sobre shadcn, CSS opcional e adaptação ao projeto, consulte o [guia de integração](AI-INTEGRATION.md).
