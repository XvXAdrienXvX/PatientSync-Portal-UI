import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CardComponent, ButtonComponent } from '@patientsync/shared/ui';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [RouterLink, MatIcon, CardComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6">
      <h1 class="text-2xl font-bold">Welcome, John</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Next Appointment -->
        <ui-card appearance="raised">
          <div card-header class="p-4 border-b flex items-center gap-2">
            <mat-icon class="text-primary-600">calendar_today</mat-icon>
            <h2 class="font-semibold">Next Appointment</h2>
          </div>
          <div card-body class="p-4 flex flex-col gap-2">
            <p class="font-medium">Dr. Annie Demers</p>
            <p class="text-sm text-gray-600">Tuesday, January 14, 2025 at 2:00 PM</p>
            <p class="text-sm text-gray-400">Admedica · (555) 123-4567</p>
            <div class="flex gap-2 mt-2">
              <ui-button variant="outline" size="sm">Cancel</ui-button>
              <ui-button variant="secondary" size="sm">Reschedule</ui-button>
            </div>
          </div>
        </ui-card>

        <!-- Unread Messages -->
        <ui-card appearance="raised">
          <div card-header class="p-4 border-b flex items-center gap-2">
            <mat-icon class="text-primary-600">mail</mat-icon>
            <h2 class="font-semibold">Messages</h2>
          </div>
          <div card-body class="p-4 flex flex-col gap-2">
            <p class="text-sm font-medium">1 new message</p>
            <p class="text-sm text-gray-500">From: Dr. Annie Demers</p>
            <p class="text-xs text-gray-400 truncate">"Your lab results are back..."</p>
            <ui-button variant="ghost" size="sm" class="self-start mt-2" routerLink="/patient/messages">
              View All Messages
            </ui-button>
          </div>
        </ui-card>

        <!-- Medication Refills -->
        <ui-card appearance="raised" class="md:col-span-2">
          <div card-header class="p-4 border-b flex items-center gap-2">
            <mat-icon class="text-primary-600">medication</mat-icon>
            <h2 class="font-semibold">Medication Refills</h2>
          </div>
          <div card-body class="p-4 divide-y">
            <div class="flex items-center justify-between py-2">
              <span class="text-sm">Lisinopril</span>
              <span class="text-sm font-medium text-red-600">3 days left</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <span class="text-sm">Metformin</span>
              <span class="text-sm font-medium text-amber-600">14 days left</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <span class="text-sm">Cetirizine</span>
              <span class="text-sm font-medium text-green-600">45 days left</span>
            </div>
          </div>
        </ui-card>
      </div>

      <!-- Quick Actions -->
      <div class="flex flex-wrap gap-3">
        <ui-button variant="primary" routerLink="/patient/appointments/book">Book Appointment</ui-button>
        <ui-button variant="secondary" routerLink="/patient/health-records">View Health Records</ui-button>
        <ui-button variant="secondary" routerLink="/patient/messages">Send Message</ui-button>
        <ui-button variant="outline">Download Records</ui-button>
      </div>
    </div>
  `,
})
export class PatientDashboardComponent {}
