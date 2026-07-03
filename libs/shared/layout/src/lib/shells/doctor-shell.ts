import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { HeaderComponent } from '../header/header';

const NAV_LINKS = [
  { label: 'Dashboard', icon: 'dashboard', path: '/doctor/dashboard' },
  { label: 'Patient Search', icon: 'search', path: '/doctor/patient-search' },
  { label: 'Messages', icon: 'message', path: '/doctor/messages' },
];

@Component({
  selector: 'app-doctor-shell',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive,
    MatSidenavContainer, MatSidenav, MatSidenavContent,
    MatNavList, MatListItem, MatIcon,
    HeaderComponent,
  ],
  template: `
    <div class="flex flex-col h-screen">
      <app-header userName="Dr. Annie Demers" role="doctor" (loggedOut)="onLogout()" (menuToggled)="sidenav.toggle()" />

      <mat-sidenav-container class="flex-1">
        <mat-sidenav #sidenav mode="over" class="w-64 pt-2">
          <mat-nav-list>
            @for (link of navLinks; track link.path) {
              <a mat-list-item [routerLink]="link.path" routerLinkActive="active-nav-link" (click)="sidenav.close()">
                <mat-icon class="mr-2">{{ link.icon }}</mat-icon>
                {{ link.label }}
              </a>
            }
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content class="p-4 md:p-6 overflow-auto">
          <router-outlet />
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .active-nav-link { background-color: var(--mat-sys-secondary-container) !important; }
  `],
})
export class DoctorShellComponent {
  protected readonly navLinks = NAV_LINKS;

  onLogout(): void {}
}
