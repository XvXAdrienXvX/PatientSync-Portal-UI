import { Component, inject, resource } from '@angular/core';
import { AuthConfigService } from '../../../shared/services/auth-config.service';
import { AuthService } from '../services/auth.service';
import { Users } from '../types/users';
import { CardComponent } from '../../../shared/ui/card/card';
import { ButtonComponent } from '../../../shared/ui/button/button';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div class="w-full max-w-md">
        <ui-card appearance="raised">
          <div card-header class="px-6 py-5">
            <h1 class="text-3xl font-semibold text-slate-900">Welcome</h1>
            <p class="mt-2 text-sm text-slate-600">Choose a test user</p>
          </div>

          <div card-body class="px-6 pb-6 flex flex-col gap-4">
            @if (usersResource.isLoading()) {
              <p class="text-sm text-slate-500">Loading users...</p>
            }

            @if (usersResource.error()) {
              <p class="text-sm text-red-500">Error loading users.</p>
            }

            <div class="grid gap-4">
              @for (user of usersResource.value(); track user.id) {
                <div class="flex flex-col gap-2">
                  <span class="text-xs uppercase tracking-[0.16em] text-slate-500">{{ user.role }}</span>
                  <ui-button type="button" variant="success" size="lg" (click)="selectUser(user)">
                    {{ user.fullName }}
                  </ui-button>
                  <div class="border-b border-slate-200 pt-1"></div>
                </div>
              }
            </div>
          </div>
        </ui-card>
      </div>
    </div>
  `,
})
export class LoginComponent {
  protected readonly config = inject(AuthConfigService);
  private readonly authService = inject(AuthService);

  protected readonly usersResource = resource({
    loader: () => {
      const request = this.authService.getUsers();
      return request instanceof Promise ? request : lastValueFrom(request);
    },
  });

  protected selectUser(user: Users): void {
    console.log('Selected user:', user);
  }
}
