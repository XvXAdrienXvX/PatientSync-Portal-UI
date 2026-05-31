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
- **Styling**: Two style layers load in this order (see `angular.json`):
  1. `src/material-theme.scss` — Angular Material M3 theme (azure-blue palette, CSS custom properties).
  2. `src/styles.css` — Tailwind CSS v4 via `@import 'tailwindcss'`. Use Tailwind for layout, spacing, and utilities on top of Material components.
- **Material Icons**: Loaded via `<link>` in `index.html`; use `<mat-icon>` directly without any import.
- **Animations**: `provideAnimationsAsync()` is registered in `app.config.ts` — required for all Material component animations.
- **State**: Use Angular `signal()` for local component state. Use `model()` for two-way bindable component inputs.

## Shared UI components

All reusable presentational components live in `src/app/shared/ui/` and are exported from the barrel `src/app/shared/ui/index.ts`. They combine Angular Material for structure/interactions and Tailwind for layout/utilities.

| Selector | File | Notes |
|---|---|---|
| `<ui-button>` | `button/` | `variant`, `size`, `loading`, `disabled` inputs. Uses `MatRipple` + `MatProgressSpinner`. |
| `<ui-card>` | `card/` | `appearance` input. Named slots: `[card-header]`, `[card-body]`, `[card-footer]`. Uses `mat-card`. |
| `<input ui-input>` | `input/` | Attribute selector — applies `MatInput` via `hostDirectives`. Must be inside `<ui-form-field>` or `<mat-form-field>`. Works with reactive forms and `ngModel`. Also matches `<textarea ui-input>`. |
| `<ui-form-field>` | `form-field/` | Wraps `mat-form-field`. Inputs: `label`, `error`, `hint`, `required`, `appearance`. Project the control via `ng-content`. |
| `<ui-dropdown>` | `dropdown/` | Self-contained `mat-form-field` + `mat-select`. Inputs: `label`, `options`, `placeholder`, `error`, `hint`, `required`, `disabled`. Two-way `[(value)]` via `model()`. |
| `<ui-toast>` | `toast/` | `type` (success/error/warning/info), required `message`, `title`, `dismissible`. Emits `dismissed`. Uses `MatIcon`. |
| `<ui-loader>` | `loader/` | `size` (sm/md/lg), `label`, `fullscreen`. Uses `mat-progress-spinner`. |

**Typical form pattern:**
```html
<ui-form-field label="Email" error="Invalid email" [required]="true">
  <input ui-input type="email" [formControl]="emailCtrl" />
</ui-form-field>
```

## TypeScript & Angular conventions

- Strict mode is fully enabled (`strict`, `noImplicitOverride`, `noImplicitReturns`, `strictTemplates`, `strictInjectionParameters`).
- Prettier is configured for 100-char line width and single quotes; HTML files use the `angular` parser.
- Test files use Vitest globals (declared in `tsconfig.spec.json`); use `describe`/`it`/`expect` without imports.
- Component filenames follow the pattern `<name>.ts` / `<name>.html` / `<name>.css` / `<name>.spec.ts` (no `.component` infix — see existing `app.ts`).
