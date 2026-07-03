# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure (Nx)

This is an **Nx monorepo** with Angular 21 standalone-component applications. It contains:

- **Apps**: `apps/patientsync-patient-portal-ui` (patient portal), `apps/patientsync-doctor-portal-ui` (doctor portal)
- **Shared libs**: `libs/shared/ui/` (UI components), `libs/shared/layout/` (layout components)

## Commands

```bash
# Patient portal (default)
npm start                    # Dev server at http://localhost:4200
npm run build                # Production build
npm test                     # Run unit tests

# Doctor portal
npm run start:doctor         # Dev server at http://localhost:4201
npm run build:doctor         # Production build

# All apps
npm run build:all            # Build all apps

# Shared libraries
npm run test:shared          # Test shared-ui and shared-layout libs

# Development tools
npm run lint                 # Run ESLint
npm run format               # Format code with Prettier
npx nx graph                 # View dependency graph (generates nx-graph.html)
```

## Architecture

Both apps follow an **Angular 21 standalone-component** architecture:
- Bootstrapped with `bootstrapApplication` in `src/main.ts`
- No `NgModule`; all components use the standalone API
- Each app has its own `app.routes.ts` and `app.config.ts`

**Key architectural points:**

- **Routing**: Each app's `app.routes.ts` exports `routes`. The `<router-outlet>` in `app.html` renders them.
- **App config**: `app.config.ts` wires global providers (`provideRouter`, `provideServiceWorker`). Add app-wide providers here.
- **PWA**: Service worker enabled in production only (`!isDevMode()`), registered via `ngsw-worker.js` after 30s of stability.
- **Styling**: Two style layers (in order):
  1. `material-theme.scss` — Angular Material M3 theme (azure-blue palette, CSS custom properties)
  2. `styles.css` — Tailwind CSS v4 via `@import 'tailwindcss'`. Use Tailwind for layout, spacing, utilities.
- **Material Icons**: Loaded via `<link>` in `index.html`; use `<mat-icon>` without imports.
- **Animations**: `provideAnimationsAsync()` in `app.config.ts` — required for Material animations.
- **State**: Use Angular `signal()` for local state, `model()` for two-way bindable inputs.

## Shared UI Components Library

All reusable presentational components live in `libs/shared/ui/src/lib/` and are exported from `libs/shared/ui/src/index.ts` (barrel export).

**Import pattern:**
```typescript
import { ButtonComponent, CardComponent } from '@patientsync/shared/ui';
```

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

## Shared Layout Components Library

Layout components in `libs/shared/layout/src/lib/`:
- `header/` — App header with user info, logout
- `shells/doctor-shell.ts` — Doctor portal layout shell
- `shells/patient-shell.ts` — Patient portal layout shell

**Import pattern:**
```typescript
import { DoctorShellComponent, PatientShellComponent, HeaderComponent } from '@patientsync/shared/layout';
```

## Apps

### Patient Portal (`apps/patientsync-patient-portal-ui`)

Features:
- Auth: Login
- Patient dashboard
- Appointments management
- Health records
- Messaging

Routes:
- `/auth/login` — Patient login
- `/patient/dashboard` — Dashboard
- `/patient/appointments` — Appointments list
- `/patient/appointments/book` — Book appointment
- `/patient/health-records` — Health records
- `/patient/messages` — Messages

### Doctor Portal (`apps/patientsync-doctor-portal-ui`)

Features:
- Auth: Login
- Doctor dashboard
- Patient search
- Patient chart view
- Visit notes
- Messaging

Routes:
- `/auth/login` — Doctor login
- `/doctor/dashboard` — Dashboard
- `/doctor/patient-search` — Find patients
- `/doctor/patient-chart/:id` — View patient chart
- `/doctor/patient-chart/:id/add-notes` — Add visit notes
- `/doctor/messages` — Messages

## TypeScript & Angular Conventions

- Strict mode enabled: `strict`, `noImplicitOverride`, `noImplicitReturns`, `strictTemplates`, `strictInjectionParameters`.
- Prettier: 100-char line width, single quotes; HTML uses `angular` parser.
- Tests: Use Vitest globals (`describe`/`it`/`expect` without imports).
- Component filenames: `<name>.ts`, `<name>.html`, `<name>.css`, `<name>.spec.ts` (no `.component` infix).

## Path Aliases

TypeScript path aliases are defined in `tsconfig.base.json`:
- `@patientsync/shared/ui` → `libs/shared/ui/src/index.ts`
- `@patientsync/shared/layout` → `libs/shared/layout/src/index.ts`
