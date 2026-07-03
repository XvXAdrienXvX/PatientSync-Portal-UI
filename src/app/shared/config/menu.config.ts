import { InjectionToken } from '@angular/core';

export interface MenuItem {
  label: string;
  route: string;
  icon?: string;
}

export const MENU_ITEMS = new InjectionToken<MenuItem[]>('menu.items');

export const PATIENT_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    route: '/patient/dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Appointments',
    route: '/patient/appointments',
    icon: 'event',
  },
  {
    label: 'Health Records',
    route: '/patient/health-records',
    icon: 'description',
  },
  {
    label: 'Messages',
    route: '/patient/messages',
    icon: 'mail',
  },
];

export const DOCTOR_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    route: '/doctor/dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Patient Search',
    route: '/doctor/patient-search',
    icon: 'people',
  },
  {
    label: 'Messages',
    route: '/doctor/messages',
    icon: 'mail',
  },
];

export const DEFAULT_MENU_ITEMS = PATIENT_MENU_ITEMS;
