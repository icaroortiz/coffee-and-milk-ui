# React + shadcn/ui example

[Português](#português) · [English](#english)

## English

A small fictional studio scheduler showing Café com Leite UI in a real React application. It uses actual shadcn/ui `Button`, `Input`, `Label` and `Dialog` components, including the Radix dialog portal, focus management and Escape behavior.

### Run locally

Use Node.js **22.12 or newer** and npm. Node **24.18.0** and npm **11.16.0** were used for the recorded build.

```sh
cd examples/react-shadcn
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://127.0.0.1:5173`). Keep this folder inside the repository: the stylesheet imports the shared preset from `../../skills/cafe-com-leite-ui/assets/soft-ui.css` relative to the example root.

```sh
npm run typecheck
npm run build
npm run preview
```

`build` writes `dist/`; the repository and release archive exclude generated output and `node_modules/`.

### Try it

1. Switch between burgundy and teal, then light and dark.
2. Open **New appointment**, submit empty fields and inspect the errors and focus.
3. Fill the required fields and submit. The session list and count update.
4. Search for a client or title; clear the search to restore the list.
5. Cancel a dialog, or close with Escape. Return focus stays on the trigger.
6. Repeat at 320px width and with keyboard navigation.

The dialog is portaled to `body`. Theme and brand attributes live on `html`, so the overlay and form inherit the same variables as the page. Avoid applying those attributes only to a wrapper around React's root; a body portal would be outside that scope.

### Scope and limitations

- All names, appointments and studio information are fictional.
- New appointments exist **only in React state**. Reloading restores the three sample records.
- The brief “Adding…” state is a deliberate local simulation. No appointment, email, payment or server request is created.
- Validation checks required fields and length limits. A production application must add server validation, access control, persistence and domain-specific scheduling rules.
- Buttons and fields use accessible primitives; this example is not a complete accessibility certification.
- The project intentionally uses Tailwind CSS **3.4.19** with the matching official shadcn registry style. It does not silently migrate existing projects to Tailwind 4.

### Pinned toolchain

| Package                | Version |
| ---------------------- | ------- |
| React / React DOM      | 19.3.1  |
| Vite                   | 8.3.8   |
| @vitejs/plugin-react   | 6.3.0   |
| TypeScript             | 5.9.3   |
| Tailwind CSS           | 3.4.19  |
| @radix-ui/react-dialog | 1.3.1   |
| @radix-ui/react-label  | 2.1.17  |
| @radix-ui/react-slot   | 1.5.0   |
| Lucide React           | 1.73.0  |
| tailwind-merge         | 2.6.0   |

All remaining direct and transitive versions are recorded in the manifest and lockfile. See [third-party notices](../../THIRD_PARTY_NOTICES.md) for component source attribution and the MIT license.

### Validation recorded on 2026-11-14

- Dependency installation completed; npm reported **0 vulnerabilities** at that time. This is a point-in-time dependency result, not a security audit.
- `npm run build` passed TypeScript checking and the Vite production build.
- Recorded build output: CSS **26.86 kB** (gzip **6.79 kB**); JavaScript **299.01 kB** (gzip **94.83 kB**). Output sizes can change with future edits.
- Chrome render review found no horizontal overflow at 320, 390 and 1280px. Modal geometry also passed at 320, 768 and 1280px.
- Tested required-field errors, first-error focus, focus containment, cancel/Escape and focus return, one in-memory submission, loading-state protection, search/empty recovery, reduced motion, and reset after reload.
- Automated axe checks returned zero violations for the tested screens and dialogs. These checks do not replace manual assistive-technology testing.
- See the [package validation record](../../docs/VALIDATION.md) for the precise scope and evidence. A race in the original browser harness was corrected by waiting for Radix to restore focus before typing into search; no application change was needed.

## Português

Exemplo executável de uma agenda fictícia, com **React, Tailwind e componentes reais do shadcn/ui**. Demonstra formulário validado, diálogo com foco gerenciado, temas claro/escuro e marcas vinho/verde-petróleo.

Na pasta `examples/react-shadcn`, rode `npm ci` e `npm run dev`. Para conferir a compilação, rode `npm run typecheck` e `npm run build`.

Os registros vivem somente na memória: recarregar a página restaura os dados iniciais. O estado “Adding…” é simulado e não envia dados, mensagens ou cobranças. O tema é aplicado ao elemento `html` para alcançar também o portal do diálogo.

Os componentes copiados do registry oficial têm a licença MIT preservada. A instalação e o build passaram; os detalhes e as limitações estão acima. Consulte o [registro de validação do pacote](../../docs/VALIDATION.md) para as verificações visuais e de interação.
