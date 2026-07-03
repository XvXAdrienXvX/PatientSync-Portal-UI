import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'doctor',
    loadChildren: () => import('./features/doctor/doctor.routes').then(m => m.DOCTOR_ROUTES),
  },
];
