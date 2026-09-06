# 📦 Ribeiro Papéis — Landing Page Institucional

Landing Page moderna, responsiva e de alta conversão desenvolvida para a **Ribeiro Comércio de Papel** (Ribeiro Papéis), empresa especializada na distribuição e fornecimento de papéis no atacado e varejo para indústrias, gráficas e comércios.

---

## 🚀 Tecnologias Utilizadas

- **[Next.js 14+](https://nextjs.org/)** — Framework React com App Router para alta performance e SEO.
- **[React 18+](https://react.dev/)** — Biblioteca de interface declarativa e componentizada.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança no código.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework de utilitários CSS para estilização moderna e responsiva.
- **[Lucide React](https://lucide.dev/)** — Ícones leves e modernos para UI/UX.

---

## 🎨 Funcionalidades e Design

- **Design Moderno & Clean:** Paleta de cores em Azul Grafite (*Slate Blue*), bege papel Kraft e destaques em verde para botões de ação.
- **100% Responsivo:** Layout adaptado para dispositivos móveis, tablets e desktops (*Mobile First*).
- **Integração Direta com Canais de Venda:**
  - Botões estratégicos direcionando direto para o **WhatsApp** com mensagem pré-formatada.
  - Links para o **Instagram** da empresa.
- **Seções Estruturadas:**
  - **Header:** Navegação fluida com CTA de cotação rápida.
  - **Hero:** Proposta de valor clara, imagem de alto impacto e chamadas para ação.
  - **Diferenciais:** Grid informando agilidade, gramaturas e atendimento personalizado.
  - **Catálogo de Produtos:** Apresentação em cards interativos das linhas de papéis (Offset, Kraft, Cartão, Bobinas).
  - **Sobre Nós:** Reforço de autoridade, logística e sustentabilidade.
  - **CTA Final / Footer:** Fechamento de conversão com contatos e localização.

---

## 📁 Estrutura de Pastas

```text
ribeiro-papeis/
├── public/
│   ├── images/
│   │   ├── hero-bg.webp
│   │   ├── products/
│   │   └── logo.svg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── ContactCTA.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Products.tsx
│   │   │   └── WhyUs.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   ├── constants/
│   │   └── links.ts
│   └── lib/
│       └── utils.ts
├── .gitignore
├── package.json
└── tailwind.config.ts
```

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **[Node.js](https://nodejs.org/)** (Versão 18.x ou superior)
- **npm**, **yarn** ou **pnpm**

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/ribeiro-papeis.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd ribeiro-papeis
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

4. **Configure os Links (WhatsApp e Instagram):**
   Edite o arquivo `src/constants/links.ts` com o número correto de telefone e o usuário do Instagram:
   ```typescript
   export const SOCIAL_LINKS = {
     whatsapp: "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o%20de%20pap%C3%A9is.",
     instagram: "https://instagram.com/ribeiro.papeis",
   };
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

6. **Acesse no navegador:**
   Abra `http://localhost:3000` para visualizar a Landing Page em execução.

---

## 🌐 Implantação (Deploy)

A forma mais rápida de publicar este projeto é utilizando a plataforma **[Vercel](https://vercel.com/)**:

1. Faça o push do seu código para um repositório no **GitHub**, **GitLab** ou **Bitbucket**.
2. Conecte sua conta na Vercel e importe o repositório.
3. O build será realizado automaticamente.

---

## 📄 Licença

Este projeto foi desenvolvido sob medida para a **Ribeiro Comércio de Papel**. Todos os direitos reservados.
