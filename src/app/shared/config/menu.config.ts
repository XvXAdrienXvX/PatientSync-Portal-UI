import { InjectionToken } from '@angular/core';

export interface MenuItem {
  label: string;
  route: string;
  icon?: string;
}

export const MENU_ITEMS = new InjectionToken<MenuItem[]>('menu.items');

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Patients',
    route: '/patients',
    icon: 'people',
  },
  {
    label: 'Appointments',
    route: '/appointments',
    icon: 'event',
  },
  {
    label: 'Reports',
    route: '/reports',
    icon: 'description',
  },
  {
    label: 'Settings',
    route: '/settings',
    icon: 'settings',
  },
];
