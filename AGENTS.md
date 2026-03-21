# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript single-page app. Keep application code in `src/`. Use `src/components/sections/` for homepage sections, `src/components/ui/` for reusable UI primitives, `src/hooks/` for shared hooks, and `src/lib/` for utilities such as class name helpers. Static assets served at runtime belong in `public/images/`. Source or generated artwork snapshots are kept in `vibe_images/`. Treat `dist/` as build output only; do not edit or commit generated files.

## Build, Test, and Development Commands
- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite dev server for local iteration.
- `npm run build`: run TypeScript project checks, then create a production bundle in `dist/`.
- `npm run preview`: serve the production build locally for a final browser check.

Run `npm run build` before opening a PR; it is the current minimum verification gate for this repo.

## Coding Style & Naming Conventions
Follow the existing TypeScript React style: functional components, 2-space indentation, and no semicolons. Use PascalCase for section and component files such as `HeroSection.tsx`, camelCase for utilities, and `useX` naming for hooks. Prefer the `@/` alias over deep relative imports, for example `@/components/Navbar`. Keep Tailwind utility classes close to the component they style, and respect strict compiler settings in `tsconfig.app.json`; unused locals and parameters should be removed rather than ignored.

## Testing Guidelines
There is no committed automated test suite yet. Until one is added, verify changes with:
- `npm run build`
- manual checks in `npm run dev`
- `npm run preview` for production-only regressions

If you add tests, place them next to the feature as `*.test.tsx` and focus on interactive behavior and rendered content.

## Commit & Pull Request Guidelines
Git history is minimal, so there is no strong established commit format yet. Use short, imperative commit subjects with clear scope, for example `feat: add roadmap metrics` or `fix: correct hero CTA scroll target`. PRs should include a concise summary, list of verification steps, and screenshots for UI changes. Call out asset replacements in `public/images/` or `vibe_images/` so reviewers can verify the intended visual change.
