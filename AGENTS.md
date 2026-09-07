# Kanso Living Contributor Guide

## Project overview

Kanso Living is a frontend-only furniture storefront with a Japanese-minimalist visual direction. It uses React 19, TypeScript, Tailwind CSS 4, and the Next.js App Router. Product, cart, wishlist, and recently viewed data are demonstrations; there is no production commerce backend.

## Essential commands

- `npm install` — install dependencies.
- `npm run dev` — start the local development server.
- `npm run format` — format supported files with Prettier and sort Tailwind classes.
- `npm run format:check` — verify formatting without modifying files.
- `npm run lint` — run ESLint with zero warnings allowed.
- `npm run build` — create the production build.
- `npm run check` — run formatting, linting, and the production build.

## Architecture

- `app/` contains routes, global styling, metadata, loading UI, and the 404 page.
- `components/` contains shared storefront and installed UI primitives.
- `lib/products.ts` is the typed mock catalogue and price-formatting source.
- `public/images/` contains the project-owned furniture imagery.
- `vercel.json` selects the native Next.js framework output and clears legacy output-directory overrides.
- Vercel builds and deploys the application automatically from the connected GitHub repository.

## Working conventions

- Keep TypeScript strict and avoid weakening types to silence errors.
- Prefer server components unless browser state, effects, or event handlers are required.
- Reuse the installed UI primitives for semantic controls such as sheets, accordions, checkboxes, sliders, and skeletons.
- Preserve the Kanso design tokens in `app/globals.css`; avoid one-off colors when a token fits.
- Keep visible text specific, concise, and useful to furniture shoppers.
- Maintain keyboard access, visible focus states, descriptive labels, and useful image alternative text.
- Keep product data separate from presentation so a future API can replace the mock catalogue.
- Do not add real checkout, authentication, persistence, or external services without an explicit requirement.
- Run `npm run format` after edits and `npm run check` before requesting review.

## Performance and motion

- Render initial page content, hero media, and other likely Largest Contentful Paint elements immediately; do not add page-entry animations that delay or hide them.
- Limit reveal motion to selected below-the-fold sections as they enter the viewport. Animate only compositor-friendly properties such as `opacity` and `transform`; never animate layout dimensions or positioning.
- Keep scroll-driven animation progressively enhanced so unsupported browsers render content normally, and always disable non-essential motion for `prefers-reduced-motion`.
- Lazy-load offscreen images and use asynchronous decoding. Keep genuine LCP images eager with high fetch priority.
- Preserve stable image containers with explicit dimensions or aspect ratios to avoid layout shift.
- Reuse the installed Embla carousel primitives for product carousels instead of adding another carousel dependency without a clear requirement.

## Git and reviews

- Never commit directly to `main`.
- Create a focused branch and open a pull request for every change.
- Use `feat/<short-kebab-case-name>` for a new feature, function, enhancement, or platform migration.
- Use `bug/<short-kebab-case-name>` for a bug fix.
- Start the pull request title with the same branch prefix and name, followed by a concise description; for example, `feat/product-search: add collection search`.
- Do not use other branch prefixes unless the repository owner explicitly approves an exception.
- All files are owned by `@narniagplus961127` through `.github/CODEOWNERS`.
- Wait for the required owner approval before merging.
- Keep commits scoped and do not include generated build output or local environment files.
