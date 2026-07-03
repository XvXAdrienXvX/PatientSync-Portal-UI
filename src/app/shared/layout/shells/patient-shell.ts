import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { SidenavComponent } from '../../ui/sidenav/sidenav';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-patient-shell',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent],
  template: `
    <div class="flex h-screen overflow-hidden">
      <ui-sidenav />

      <div class="flex flex-col flex-1 overflow-hidden">
        <app-header [userName]="userStateService.currentUser()?.fullName || ''" role="patient" (loggedOut)="onLogout()" />

        <!-- Page content -->
        <main class="flex-1 overflow-auto p-4 md:p-6 bg-slate-50">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class PatientShellComponent {
  protected readonly userStateService = inject(UserStateService);
  private readonly router = inject(Router);

  onLogout(): void {
    this.userStateService.setCurrentUser(null);
    this.router.navigate(['/auth/login']);
  }
}
