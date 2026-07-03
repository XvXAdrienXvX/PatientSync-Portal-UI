import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CardComponent, ButtonComponent } from '@patientsync/shared/ui';

interface ScheduleEntry {
  time: string;
  patient: string;
  patientId: string;
  complaint: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'No-show';
}

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [RouterLink, MatIcon, CardComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6">
      <h1 class="text-2xl font-bold">Good morning, Dr. Demers</h1>

      <!-- Today's Schedule -->
      <ui-card appearance="raised">
        <div card-header class="p-4 border-b flex items-center gap-2">
          <mat-icon>calendar_today</mat-icon>
          <h2 class="font-semibold">Today's Schedule — Thursday, Jan 14</h2>
        </div>
        <div card-body class="divide-y">
          @for (appt of schedule; track appt.time) {
            <div class="p-4 flex items-center gap-4">
              <span class="text-sm font-medium text-gray-500 w-20 shrink-0">{{ appt.time }}</span>
              <div class="flex-1 min-w-0">
                @if (appt.status !== 'Cancelled') {
                  <p class="text-sm font-medium">{{ appt.patient }}</p>
                  <p class="text-sm text-gray-500">{{ appt.complaint }}</p>
                } @else {
                  <p class="text-sm text-gray-400 line-through">{{ appt.patient }}</p>
                }
              </div>
              <span [class]="statusClass(appt.status)" class="text-xs rounded-full px-2 py-0.5 shrink-0">
                {{ appt.status }}
              </span>
              @if (appt.status === 'Scheduled') {
                <ui-button variant="outline" size="sm" [routerLink]="['/doctor/patient-chart', appt.patientId]">
                  View Chart
                </ui-button>
              }
            </div>
          }
        </div>
        <div card-footer class="p-3 bg-gray-50 border-t text-sm text-gray-600">
          Scheduled: 3 &nbsp;|&nbsp; Completed: 0 &nbsp;|&nbsp; No-shows: 0
        </div>
      </ui-card>

      <!-- Urgent Messages -->
      <ui-card appearance="raised">
        <div card-header class="p-4 border-b flex items-center gap-2">
          <mat-icon class="text-red-500">priority_high</mat-icon>
          <h2 class="font-semibold">Urgent Messages</h2>
        </div>
        <div card-body class="p-4">
          <div class="flex items-start gap-3 bg-red-50 rounded-lg p-3 border border-red-200">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-red-800">John Smith · 1 hour ago</p>
              <p class="text-sm text-red-700">"Chest pain, shortness of breath"</p>
            </div>
            <ui-button variant="danger" size="sm" routerLink="/doctor/messages">Respond</ui-button>
          </div>
        </div>
      </ui-card>

      <!-- Quick Actions -->
      <div class="flex flex-wrap gap-3">
        <ui-button variant="primary" routerLink="/doctor/patient-search">Patient Search</ui-button>
        <ui-button variant="secondary" routerLink="/doctor/messages">Messages</ui-button>
        <ui-button variant="outline">View Lab Results</ui-button>
      </div>
    </div>
  `,
})
export class DoctorDashboardComponent {
  protected readonly schedule: ScheduleEntry[] = [
    { time: '9:00 AM',  patient: 'John Smith',    patientId: '1', complaint: 'Annual Checkup', status: 'Scheduled' },
    { time: '10:30 AM', patient: 'Sarah Johnson', patientId: '2', complaint: 'Cough',          status: 'Scheduled' },
    { time: '2:00 PM',  patient: 'Michael Brown', patientId: '3', complaint: 'Knee Pain',      status: 'Scheduled' },
    { time: '3:30 PM',  patient: 'Lisa Chen',     patientId: '4', complaint: '',               status: 'Cancelled' },
  ];

  protected statusClass(status: ScheduleEntry['status']): string {
    const map: Record<ScheduleEntry['status'], string> = {
      Scheduled: 'bg-blue-100 text-blue-700',
      Completed: 'bg-green-100 text-green-700',
      Cancelled: 'bg-red-100 text-red-700',
      'No-show':  'bg-amber-100 text-amber-700',
    };
    return map[status];
  }
}
