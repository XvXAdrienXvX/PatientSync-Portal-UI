import { Component, inject } from '@angular/core';
import { AuthConfigService } from '../../../shared/services/auth-config.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `<div class="p-6">Login</div>`,
})
export class LoginComponent {
  protected readonly config = inject(AuthConfigService);
}
