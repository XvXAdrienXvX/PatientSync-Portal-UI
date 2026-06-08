import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PATIENT_MENU_ITEMS, DOCTOR_MENU_ITEMS, type MenuItem } from '../../config/menu.config';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'ui-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    @if (userStateService.isLoggedIn()) {
      <div class="flex">
        <!-- Sidebar -->
        <nav [class.w-64]="!isCollapsed()" [class.w-20]="isCollapsed()" class="bg-primary-800 text-white min-h-screen flex flex-col transition-all duration-300">
          <!-- Header with Toggle -->
          <div class="p-6 border-b border-primary-700 flex items-center justify-between">
            @if (!isCollapsed()) {
              <h1 class="text-xl font-bold">PatientSync</h1>
            }
            <button
              (click)="toggleCollapse()"
              class="p-2 hover:bg-primary-700 rounded transition-colors"
              [attr.aria-label]="isCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
            >
              <mat-icon>{{ isCollapsed() ? 'chevron_right' : 'chevron_left' }}</mat-icon>
            </button>
          </div>

          <!-- Menu Items -->
          <ul class="flex-1 py-4">
            @for (item of menuItems(); track item.route) {
              <li>
                <a
                  [routerLink]="item.route"
                  routerLinkActive="bg-primary-700"
                  [routerLinkActiveOptions]="{ exact: true }"
                  [title]="isCollapsed() ? item.label : ''"
                  class="block px-6 py-3 hover:bg-primary-700 transition-colors duration-200 flex items-center gap-3"
                >
                  @if (item.icon) {
                    <mat-icon class="text-xl">{{ item.icon }}</mat-icon>
                  }
                  @if (!isCollapsed()) {
                    <span>{{ item.label }}</span>
                  }
                </a>
              </li>
            }
          </ul>

          <!-- Footer -->
          <div class="p-4 border-t border-primary-700 text-sm text-primary-200">
            @if (!isCollapsed()) {
              <p>© 2026 PatientSync</p>
            }
          </div>
        </nav>
      </div>
    }
  `,
})
export class SidenavComponent {
  protected readonly userStateService = inject(UserStateService);
  protected readonly isCollapsed = signal(false);

  protected readonly menuItems = computed(() => {
    const user = this.userStateService.currentUser();
    if (!user) return [];
    return user.role.toLowerCase() === 'patient' ? PATIENT_MENU_ITEMS : DOCTOR_MENU_ITEMS;
  });

  protected toggleCollapse(): void {
    this.isCollapsed.update(v => !v);
  }
}
