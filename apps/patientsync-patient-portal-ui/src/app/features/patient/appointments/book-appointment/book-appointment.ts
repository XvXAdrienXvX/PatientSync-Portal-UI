import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent, FormFieldComponent, InputComponent, ButtonComponent } from '@patientsync/shared/ui';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [RouterLink, CardComponent, FormFieldComponent, InputComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6 max-w-2xl">
      <div class="flex items-center gap-3">
        <ui-button variant="ghost" size="sm" routerLink="/patient/appointments">← Back</ui-button>
        <h1 class="text-2xl font-bold">Book Appointment</h1>
      </div>

      <ui-card appearance="raised">
        <div card-header class="p-4 border-b">
          <h2 class="font-semibold">Select a date &amp; time</h2>
          <p class="text-sm text-gray-500 mt-0.5">Dr. Annie Demers — Available slots (next 30 days)</p>
        </div>
        <div card-body class="p-4">
          <div class="rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 h-52 flex items-center justify-center text-gray-400 text-sm">
            Calendar / date-time picker
          </div>
        </div>
      </ui-card>

      <ui-card appearance="raised">
        <div card-header class="p-4 border-b">
          <h2 class="font-semibold">Chief Complaint</h2>
        </div>
        <div card-body class="p-4 flex flex-col gap-4">
          <ui-form-field label="Reason for visit" [required]="true" hint="Minimum 10 characters">
            <textarea ui-input rows="3" placeholder="e.g. Annual checkup, follow-up for blood pressure..."></textarea>
          </ui-form-field>

          <div class="flex gap-3">
            <ui-button type="submit" variant="primary">Confirm Booking</ui-button>
            <ui-button variant="ghost" routerLink="/patient/appointments">Cancel</ui-button>
          </div>
        </div>
      </ui-card>
    </div>
  `,
})
export class BookAppointmentComponent {
  onSubmit(): void {}
}
