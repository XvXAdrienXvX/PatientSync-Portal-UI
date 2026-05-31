import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';

const NAV_LINKS = [
  { label: 'Dashboard',      icon: 'dashboard', path: '/doctor/dashboard' },
  { label: 'Patient Search', icon: 'search',    path: '/doctor/patient-search' },
  { label: 'Messages',       icon: 'message',   path: '/doctor/messages' },
];

@Component({
  selector: 'app-doctor-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
  template: `
    <div class="flex flex-col h-screen overflow-hidden">
      <app-header userName="Dr. Annie Demers" role="doctor" (loggedOut)="onLogout()" (menuToggled)="open.set(!open())" />

      <div class="flex flex-1 overflow-hidden relative">
        <!-- Mobile overlay -->
        @if (open()) {
          <div class="fixed inset-0 z-20 bg-black/40 md:hidden" (click)="open.set(false)"></div>
        }

        <!-- Sidebar -->
        <nav [class]="sidebarClass()" aria-label="Main navigation">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="bg-blue-50 text-blue-700 font-medium"
              class="flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              (click)="open.set(false)"
            >
              <span class="material-icons text-[20px]">{{ link.icon }}</span>
              {{ link.label }}
            </a>
          }
        </nav>

        <!-- Page content -->
        <main class="flex-1 overflow-auto p-4 md:p-6">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class DoctorShellComponent {
  protected readonly open = signal(false);
  protected readonly navLinks = NAV_LINKS;

  protected readonly sidebarClass = computed(() => {
    const base = 'absolute md:relative inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 flex flex-col pt-3 gap-0.5 transition-transform duration-200 md:transform-none shrink-0';
    return `${base} ${this.open() ? 'translate-x-0' : '-translate-x-full'}`;
  });

  onLogout(): void {}
}
