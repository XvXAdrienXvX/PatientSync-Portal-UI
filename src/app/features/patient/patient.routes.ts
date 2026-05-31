import { Routes } from '@angular/router';

export const PATIENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../../shared/layout/shells/patient-shell').then(m => m.PatientShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/patient-dashboard').then(m => m.PatientDashboardComponent),
      },
      {
        path: 'appointments',
        loadComponent: () => import('./appointments/appointments-list/appointments-list').then(m => m.AppointmentsListComponent),
      },
      {
        path: 'appointments/book',
        loadComponent: () => import('./appointments/book-appointment/book-appointment').then(m => m.BookAppointmentComponent),
      },
      {
        path: 'health-records',
        loadComponent: () => import('./health-records/health-records').then(m => m.HealthRecordsComponent),
      },
      {
        path: 'messages',
        loadComponent: () => import('./messages/patient-messages').then(m => m.PatientMessagesComponent),
      },
    ],
  },
];
