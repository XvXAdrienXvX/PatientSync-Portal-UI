import { Component } from '@angular/core';
import { CardComponent, FormFieldComponent, InputComponent, ButtonComponent } from '@patientsync/shared/ui';

@Component({
  selector: 'app-patient-messages',
  standalone: true,
  imports: [CardComponent, FormFieldComponent, InputComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6">
      <h1 class="text-2xl font-bold">Messages</h1>

      <!-- Inbox -->
      <section>
        <h2 class="text-lg font-semibold mb-3">Inbox</h2>
        <div class="flex flex-col gap-2">
          <ui-card appearance="outlined">
            <div card-body class="p-4 flex items-start gap-3 cursor-pointer">
              <div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-center mb-0.5">
                  <p class="font-medium text-sm">Dr. Annie Demers</p>
                  <p class="text-xs text-gray-400">Jan 10, 2025</p>
                </div>
                <p class="text-sm text-gray-600 truncate">Your lab results are back. Everything looks...</p>
              </div>
            </div>
          </ui-card>

          <ui-card appearance="outlined">
            <div card-body class="p-4 flex items-start gap-3 cursor-pointer">
              <div class="w-2 h-2 rounded-full bg-gray-200 mt-1.5 shrink-0"></div>
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-center mb-0.5">
                  <p class="font-medium text-sm text-gray-500">Dr. Annie Demers</p>
                  <p class="text-xs text-gray-400">Jan 5, 2025</p>
                </div>
                <p class="text-sm text-gray-400 truncate">Please call the clinic to schedule your follow-up</p>
              </div>
            </div>
          </ui-card>
        </div>
      </section>

      <!-- Compose -->
      <section>
        <h2 class="text-lg font-semibold mb-3">New Message</h2>
        <ui-card appearance="raised">
          <div card-body class="p-4 flex flex-col gap-4">
            <ui-form-field label="Subject" hint="Optional">
              <input ui-input type="text" placeholder="e.g. Question about my medication" />
            </ui-form-field>

            <ui-form-field label="Message" [required]="true" hint="Min 10 · Max 1000 characters">
              <textarea ui-input rows="4" placeholder="Type your message here..."></textarea>
            </ui-form-field>

            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-400">0 / 1000</span>
              <ui-button type="submit" variant="primary">Send to Dr. Demers</ui-button>
            </div>
          </div>
        </ui-card>
      </section>
    </div>
  `,
})
export class PatientMessagesComponent {
  onSubmit(): void {}
}
