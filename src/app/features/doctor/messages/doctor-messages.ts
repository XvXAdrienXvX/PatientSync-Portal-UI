import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card/card';
import { FormFieldComponent } from '../../../shared/ui/form-field/form-field';
import { InputComponent } from '../../../shared/ui/input/input';
import { ButtonComponent } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-doctor-messages',
  standalone: true,
  imports: [CardComponent, FormFieldComponent, InputComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6">
      <h1 class="text-2xl font-bold">Patient Messages</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Inbox -->
        <section>
          <h2 class="text-lg font-semibold mb-3">Inbox</h2>
          <div class="flex flex-col gap-2">
            <!-- Unread / urgent -->
            <ui-card appearance="outlined">
              <div card-body class="p-4 flex items-start gap-3 cursor-pointer bg-red-50">
                <div class="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-center mb-0.5">
                    <p class="font-medium text-sm">John Smith</p>
                    <p class="text-xs text-gray-400">1 hr ago</p>
                  </div>
                  <p class="text-sm text-red-600 font-medium truncate">Chest pain, shortness of breath</p>
                </div>
              </div>
            </ui-card>

            <!-- Read -->
            <ui-card appearance="outlined">
              <div card-body class="p-4 flex items-start gap-3 cursor-pointer">
                <div class="w-2 h-2 rounded-full bg-gray-200 mt-1.5 shrink-0"></div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-center mb-0.5">
                    <p class="font-medium text-sm text-gray-500">Sarah Johnson</p>
                    <p class="text-xs text-gray-400">Jan 5</p>
                  </div>
                  <p class="text-sm text-gray-400 truncate">Question about prenatal vitamins</p>
                </div>
              </div>
            </ui-card>
          </div>
        </section>

        <!-- Reply View -->
        <section>
          <h2 class="text-lg font-semibold mb-3">Reply</h2>
          <ui-card appearance="raised">
            <div card-header class="p-4 border-b bg-gray-50">
              <p class="font-medium text-sm">John Smith · 1 hour ago</p>
              <p class="text-sm text-gray-700 mt-1 italic">"Chest pain, shortness of breath — should I go to the ER?"</p>
            </div>
            <div card-body class="p-4 flex flex-col gap-4">
              <ui-form-field label="Reply" [required]="true">
                <textarea ui-input rows="5" placeholder="Type your response..."></textarea>
              </ui-form-field>

              <div class="flex justify-between items-center">
                <div class="flex gap-2">
                  <ui-button variant="ghost" size="sm">Mark as Read</ui-button>
                  <ui-button variant="ghost" size="sm">Delete</ui-button>
                </div>
                <ui-button type="submit" variant="primary">Send Reply</ui-button>
              </div>
            </div>
          </ui-card>
        </section>
      </div>
    </div>
  `,
})
export class DoctorMessagesComponent {
  onSubmit(): void {}
}
