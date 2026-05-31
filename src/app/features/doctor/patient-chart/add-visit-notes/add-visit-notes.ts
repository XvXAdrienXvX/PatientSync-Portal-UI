import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../../shared/ui/card/card';
import { FormFieldComponent } from '../../../../shared/ui/form-field/form-field';
import { InputComponent } from '../../../../shared/ui/input/input';
import { ButtonComponent } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-add-visit-notes',
  standalone: true,
  imports: [RouterLink, CardComponent, FormFieldComponent, InputComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6 max-w-2xl">
      <div class="flex items-center gap-3">
        <ui-button variant="ghost" size="sm" routerLink="..">← Back to Chart</ui-button>
        <h1 class="text-2xl font-bold">Add Visit Notes</h1>
      </div>

      <ui-card appearance="raised">
        <div card-header class="p-4 border-b">
          <p class="font-medium">John Smith</p>
          <p class="text-sm text-gray-500">Jan 14, 2025 at 2:00 PM — Annual Checkup</p>
        </div>
        <div card-body class="p-4 flex flex-col gap-4">
          <ui-form-field label="Visit Notes" [required]="true" hint="Min 20 · Max 2000 characters">
            <textarea ui-input rows="10" placeholder="Document assessment, plan, prescriptions, follow-up instructions..."></textarea>
          </ui-form-field>

          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-400">0 / 2000</span>
            <div class="flex gap-3">
              <ui-button variant="ghost" routerLink="..">Cancel</ui-button>
              <ui-button type="submit" variant="primary">Save Notes</ui-button>
            </div>
          </div>
        </div>
      </ui-card>
    </div>
  `,
})
export class AddVisitNotesComponent {
  onSubmit(): void {}
}
