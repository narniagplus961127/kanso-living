# Kanso Living

A responsive, frontend-only furniture storefront inspired by Japanese minimalism. Kanso Living pairs quiet editorial layouts with a fully interactive mock shopping experience.

**Live site:** [kanso-living.narnia-gplus.chatgpt.site](https://kanso-living.narnia-gplus.chatgpt.site)

## Features

- Responsive home, collection, product detail, About, FAQ, loading, and 404 pages
- Product search, category and material filters, price range, sorting, and incremental loading
- Persistent shopping bag with quantity controls, removal, subtotal, and demo promo code `KANSO10`
- Saved products and recently viewed products stored locally in the browser
- Product finishes, availability, related pieces, care guidance, and delivery information
- Mobile navigation, mobile filter drawer, accessible labels, keyboard focus states, and semantic controls
- Original project-owned furniture imagery

## Technology

- React 19
- TypeScript
- Tailwind CSS 4
- Vinext with the Next.js App Router API
- Base UI and shadcn components
- Lucide icons
- Prettier with Tailwind class sorting
- ESLint with TypeScript and React Hooks rules

## Getting started

Requirements: Node.js 22.13 or newer and npm.

```bash
git clone https://github.com/narniagplus961127/kanso-living.git
cd kanso-living
npm install
npm run dev
```

Open the local URL printed by the development server.

## Scripts

| Command                | Purpose                                 |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the development server            |
| `npm run format`       | Format the repository with Prettier     |
| `npm run format:check` | Check formatting without changing files |
| `npm run lint`         | Run ESLint with zero warnings allowed   |
| `npm run build`        | Create a production build               |
| `npm run check`        | Run formatting, linting, and the build  |

## Project structure

```text
app/                  Routes, layout, metadata, and global styles
components/           Storefront components and UI primitives
hooks/                Shared React hooks
lib/products.ts       Typed mock product catalogue
public/images/        Furniture imagery
.github/CODEOWNERS    Required owner review for all files
AGENTS.md             Contribution guidance for coding agents
```

## Commerce scope

This repository demonstrates the customer-facing frontend. Checkout, authentication, payments, inventory, order management, and server-side persistence are intentionally not implemented. The local catalogue and browser storage can be replaced by production APIs later.

## Repository workflow

The `main` branch is protected. Work must be proposed through a pull request and requires approval from the repository owner and code owner, `@narniagplus961127`, before merging.
