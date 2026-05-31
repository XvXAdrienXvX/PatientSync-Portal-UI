# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200 (auto-reloads on change)
npm run build      # Production build → dist/PatientSync-Portal-UI/browser/
npm run watch      # Dev build in watch mode
npm test           # Run unit tests with Vitest via Angular CLI
```

To run a single test file, use Vitest directly:
```bash
npx vitest run src/app/app.spec.ts
```

There is no linter configured. Format code with Prettier:
```bash
npx prettier --write "src/**/*.{ts,html,css}"
```

## Architecture

This is an **Angular 21 standalone-component application** bootstrapped with `bootstrapApplication` in `src/main.ts`. There is no `NgModule`; all components use the standalone API and declare their own imports.

**Key architectural points:**

- **Routing**: `src/app/app.routes.ts` exports `routes` (currently empty). Add routes here; the `<router-outlet>` in `app.html` renders them.
- **App config**: `src/app/app.config.ts` wires global providers (`provideRouter`, `provideServiceWorker`). Add app-wide providers (HTTP client, guards, interceptors) here.
- **PWA**: Service worker (`@angular/service-worker`) is enabled in production only (`!isDevMode()`), registered via `ngsw-worker.js` after 30 s of stability.
- **Styling**: Tailwind CSS v4 is loaded globally in `src/styles.css` via `@import 'tailwindcss'`. PostCSS is configured in `.postcssrc.json`. Component-scoped styles go in each component's `.css` file.
- **State**: Use Angular `signal()` for local component state (already used in `App`). Prefer signals over `BehaviorSubject` for new state.

## TypeScript & Angular conventions

- Strict mode is fully enabled (`strict`, `noImplicitOverride`, `noImplicitReturns`, `strictTemplates`, `strictInjectionParameters`).
- Prettier is configured for 100-char line width and single quotes; HTML files use the `angular` parser.
- Test files use Vitest globals (declared in `tsconfig.spec.json`); use `describe`/`it`/`expect` without imports.
- Component filenames follow the pattern `<name>.ts` / `<name>.html` / `<name>.css` / `<name>.spec.ts` (no `.component` infix — see existing `app.ts`).
