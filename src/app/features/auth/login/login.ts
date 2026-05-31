import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card/card';
import { FormFieldComponent } from '../../../shared/ui/form-field/form-field';
import { InputComponent } from '../../../shared/ui/input/input';
import { ButtonComponent } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent, FormFieldComponent, InputComponent, ButtonComponent],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <ui-card appearance="raised" class="w-full max-w-md">
        <div card-body class="p-8 flex flex-col gap-6">
          <div class="text-center">
            <h1 class="text-2xl font-bold">Admedica</h1>
            <p class="text-sm text-gray-500 mt-1">Patient &amp; Doctor Portal</p>
          </div>

          <form class="flex flex-col gap-4" (ngSubmit)="onSubmit()">
            <ui-form-field label="Email" [required]="true">
              <input ui-input type="email" placeholder="you@example.com" />
            </ui-form-field>

            <ui-form-field label="Password" [required]="true">
              <input ui-input type="password" placeholder="••••••••" />
            </ui-form-field>

            <ui-button type="submit" variant="primary" class="w-full mt-2">
              Sign In
            </ui-button>
          </form>

          <div class="border-t pt-4 text-xs text-gray-400 space-y-1">
            <p>Patient: <span class="font-mono">john&#64;patient.com / password123</span></p>
            <p>Doctor: <span class="font-mono">dr&#64;admedica.com / password123</span></p>
          </div>
        </div>
      </ui-card>
    </div>
  `,
})
export class LoginComponent {
  onSubmit(): void {}
}
