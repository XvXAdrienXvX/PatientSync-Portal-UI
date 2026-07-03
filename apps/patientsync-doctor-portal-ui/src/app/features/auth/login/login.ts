import { Component } from '@angular/core';
import { CardComponent } from '@patientsync/shared/ui';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <ui-card appearance="raised" class="w-full max-w-md">
        <div card-body class="p-8 flex flex-col gap-6">
          
        </div>
      </ui-card>
    </div>
  `,
})
export class LoginComponent {
  onSubmit(): void {}
}
