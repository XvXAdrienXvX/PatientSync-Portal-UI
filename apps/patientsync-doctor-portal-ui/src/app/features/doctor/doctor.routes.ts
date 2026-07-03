import { Routes } from '@angular/router';

export const DOCTOR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@patientsync/shared/layout').then(m => m.DoctorShellComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/doctor-dashboard').then(m => m.DoctorDashboardComponent),
      },
      {
        path: 'patient-search',
        loadComponent: () => import('./patient-search/patient-search').then(m => m.PatientSearchComponent),
      },
      {
        path: 'patient-chart/:id',
        loadComponent: () => import('./patient-chart/patient-chart').then(m => m.PatientChartComponent),
      },
      {
        path: 'patient-chart/:id/add-notes',
        loadComponent: () => import('./patient-chart/add-visit-notes/add-visit-notes').then(m => m.AddVisitNotesComponent),
      },
      {
        path: 'messages',
        loadComponent: () => import('./messages/doctor-messages').then(m => m.DoctorMessagesComponent),
      },
    ],
  },
];
