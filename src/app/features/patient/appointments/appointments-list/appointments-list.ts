import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../../shared/ui/card/card';
import { ButtonComponent } from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-appointments-list',
  standalone: true,
  imports: [RouterLink, CardComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Appointments</h1>
        <ui-button variant="primary" routerLink="/patient/appointments/book">Book New</ui-button>
      </div>

      <!-- Upcoming -->
      <section>
        <h2 class="text-lg font-semibold mb-3">Upcoming</h2>
        <div class="flex flex-col gap-3">
          <ui-card appearance="outlined">
            <div card-body class="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p class="font-medium">Tuesday, Jan 14, 2025 at 2:00 PM</p>
                <p class="text-sm text-gray-600">Dr. Annie Demers — Annual Checkup</p>
              </div>
              <div class="flex gap-2">
                <ui-button variant="outline" size="sm">Cancel</ui-button>
                <ui-button variant="secondary" size="sm">Reschedule</ui-button>
              </div>
            </div>
          </ui-card>
        </div>
      </section>

      <!-- Past -->
      <section>
        <h2 class="text-lg font-semibold mb-3">Past Appointments</h2>
        <div class="flex flex-col gap-3">
          <ui-card appearance="outlined">
            <div card-body class="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div class="flex flex-col gap-1">
                <p class="font-medium">Monday, Oct 15, 2024</p>
                <p class="text-sm text-gray-600">Dr. Annie Demers — Annual Physical</p>
                <span class="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5 self-start">Completed</span>
              </div>
              <ui-button variant="ghost" size="sm">View Notes</ui-button>
            </div>
          </ui-card>
        </div>
      </section>
    </div>
  `,
})
export class AppointmentsListComponent {}
