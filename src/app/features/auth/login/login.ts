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
          
        </div>
      </ui-card>
    </div>
  `,
})
export class LoginComponent {
  onSubmit(): void {}
}
