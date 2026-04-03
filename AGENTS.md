# AGENTS.md

This file provides guidance for AI coding agents operating in this repository.

## Project Overview

React 18 + TypeScript + Vite 6 single-page application for a VTOL drone smart logistics showcase site (Chinese-language). Uses Tailwind CSS 3 with a shadcn/ui-style design token system. No backend, no routing library — scroll-based navigation only.

## Build / Dev / Preview Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Type-check (tsc -b) then production build (vite build)
npm run preview    # Preview the production build locally
```

**Type-checking only** (no emit):
```bash
npx tsc -b
```

## Tests

No test framework is configured. There are no test files or test runner dependencies. If tests are added, Vitest is the recommended choice for Vite projects.

## Linting / Formatting

No ESLint, Prettier, or Biome is configured. Code quality is enforced through TypeScript strict mode only. The `tsconfig.app.json` enables:

- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- `noUncheckedSideEffectImports: true`

Run `npx tsc -b` to catch type errors before committing.

## Directory Structure

```
src/
├── App.tsx              # Root component (only default export in codebase)
├── main.tsx             # Vite/React entry point
├── index.css            # Global styles (Tailwind entry + custom CSS classes)
├── vite-env.d.ts        # Vite type declarations
├── components/
│   ├── Navbar.tsx
│   ├── ParticleBackground.tsx
│   ├── SharedComponents.tsx   # Reusable UI primitives (SectionHeader, GlassCard, etc.)
│   ├── ui/                    # shadcn/ui components (button.tsx)
│   └── sections/              # Page section components (HeroSection, MarketSection, etc.)
├── hooks/
│   └── useAnimations.ts       # Custom hooks (useInView, useCountUp)
└── lib/
    ├── utils.ts               # cn() utility (clsx + tailwind-merge)
    └── siteMeta.ts            # Shared site data constants
```

## Code Style Guidelines

### Formatting

- **Indentation:** 2 spaces
- **Semicolons:** Omitted in all authored code. Exception: shadcn/ui-generated files (`button.tsx`, `utils.ts`) use semicolons — preserve their style when editing them.
- **Quotes:** Single quotes. Exception: shadcn/ui files use double quotes.
- **Trailing commas:** Yes, in all multi-line constructs (objects, arrays, parameters).
- **Line length:** No hard limit; Tailwind class strings may be long. Generally stays under ~140 chars.

### Imports

- **Named imports** are the default. Default imports only for `App` in `main.tsx`.
- **Import order:** (1) React/ReactDOM, (2) third-party libraries, (3) internal `@/` imports, (4) CSS.
- **Path alias:** Always use `@/` for cross-module imports (maps to `src/`). Use relative paths only in `main.tsx`.
- **Type-only imports:** Use `import type { ... }` for type-only imports. Inline `type` keyword (`import { cva, type VariantProps }`) is also acceptable.

### Types

- **Use `interface` for all object shapes and props** — never `type` aliases for object definitions.
- **Props interfaces:** Name as `ComponentNameProps` (e.g., `SectionHeaderProps`, `GlassCardProps`).
- **Extend HTML attributes** when wrapping native elements: `interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}`.
- **No `any`** — the codebase is strictly typed with zero `any` usage.
- **Use `as const`** for immutable data arrays.
- **Generics** with hooks/DOM APIs: `useRef<HTMLDivElement>(null)`, `querySelectorAll<HTMLElement>(...)`.
- **Non-null assertion `!`** only for `document.getElementById('root')!` in `main.tsx`.

### Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| Components | PascalCase | `HeroSection`, `GlassCard` |
| Component files | PascalCase `.tsx` | `Navbar.tsx`, `HeroSection.tsx` |
| Hooks | `use` prefix, camelCase | `useInView`, `useCountUp` |
| Utility files | camelCase `.ts` | `utils.ts`, `siteMeta.ts` |
| Directories | lowercase | `sections/`, `hooks/`, `ui/` |
| Variables & functions | camelCase | `scrolled`, `handleClick` |
| Module-level data constants | UPPER_SNAKE_CASE or Chinese identifiers | `NAV_ITEMS`, `核心数据` |
| Interfaces | PascalCase, `Props`-suffixed for component props | `SectionHeaderProps` |
| CSS custom classes | kebab-case | `glass-card`, `hud-panel` |

### Functions

- **`function` declarations** for all React components: `export function Navbar() { ... }`
- **Arrow functions** for callbacks, helpers, event handlers, and inline logic.
- **Exception:** `React.forwardRef` components use arrow functions (shadcn/ui convention).

### Exports

- **Named exports** everywhere. No default exports except the root `App` component.
- **No barrel files** — import directly from the specific file path.
- When lazy-loading named exports, adapt with `.then(module => ({ default: module.ComponentName }))`.

### Error Handling

- **Guard clauses with early return** for null checks on refs and DOM elements.
- **Optional chaining** for DOM queries: `document.getElementById(id)?.scrollIntoView(...)`.
- No try/catch blocks (no async data fetching in this project).

### Comments

The codebase is intentionally comment-free. Code should be self-documenting through clear naming. Do not add unnecessary comments; only add them when logic is genuinely non-obvious.

### Styling

- **Tailwind CSS exclusively** — no CSS modules, no styled-components.
- Use the `cn()` utility from `@/lib/utils` to merge class names: `cn('base-class', conditional && 'active-class', className)`.
- Custom CSS classes (`glass-card`, `hud-panel`, etc.) are defined in `src/index.css`.
- Component variants use `class-variance-authority` (CVA) following the shadcn/ui pattern.
- The color system uses CSS custom properties in HSL format (shadcn/ui convention).

### Component Patterns

- Each page section is a self-contained component in `src/components/sections/`.
- Shared UI primitives live in `src/components/SharedComponents.tsx`.
- Static data arrays are colocated at module scope in the component file that uses them.
- Cross-cutting data lives in `src/lib/siteMeta.ts`.
- Sections are lazy-loaded via `React.lazy()` + a custom `DeferredSection` wrapper with `IntersectionObserver`.

### State Management

- **Local `useState` only** — no Context API, Redux, or external state libraries.
- State does not cross component boundaries; each section is independent.
- Custom hooks in `src/hooks/` encapsulate reusable stateful logic.

### Performance

- `requestAnimationFrame` throttling for scroll handlers.
- `IntersectionObserver` for viewport visibility detection.
- Check `prefers-reduced-motion` before enabling animations.
- Canvas particle system caps device pixel ratio for performance.
