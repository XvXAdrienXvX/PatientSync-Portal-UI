import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { CardComponent, ButtonComponent } from '@patientsync/shared/ui';

@Component({
  selector: 'app-patient-chart',
  standalone: true,
  imports: [RouterLink, MatTabGroup, MatTab, MatIcon, CardComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6">
      <div class="flex items-center gap-3">
        <ui-button variant="ghost" size="sm" routerLink="/doctor/dashboard">← Schedule</ui-button>
        <h1 class="text-2xl font-bold">Patient Chart</h1>
      </div>

      <!-- Demographics Header -->
      <ui-card appearance="raised">
        <div card-body class="p-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div class="flex flex-col gap-1">
            <h2 class="text-xl font-bold">John Smith</h2>
            <p class="text-sm text-gray-600">DOB: March 15, 1985 · Age: 40</p>
            <p class="text-sm text-gray-600">Phone: (555) 987-6543</p>
            <p class="text-sm text-gray-400">Insurance: Sunlife #SL-123456</p>
          </div>

          <div class="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 self-start">
            <mat-icon class="!text-[18px] text-red-600 shrink-0">warning</mat-icon>
            <div>
              <p class="text-xs font-bold text-red-700 uppercase tracking-wide">ALLERGY ALERT</p>
              <p class="text-sm text-red-600">Penicillin — Anaphylaxis risk</p>
            </div>
          </div>

          <ui-button variant="primary" size="sm" routerLink="add-notes">Add Visit Notes</ui-button>
        </div>
      </ui-card>

      <!-- Chart Tabs -->
      <mat-tab-group>
        <mat-tab label="Conditions">
          <div class="py-4 flex flex-col gap-3">
            <ui-card>
              <div card-body class="p-4 flex justify-between items-start">
                <div>
                  <p class="font-medium">Hypertension</p>
                  <p class="text-sm text-gray-500">Diagnosed: 2019</p>
                </div>
                <span class="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">Controlled</span>
              </div>
            </ui-card>
            <ui-card>
              <div card-body class="p-4 flex justify-between items-start">
                <div>
                  <p class="font-medium">Type 2 Diabetes</p>
                  <p class="text-sm text-gray-500">Diagnosed: 2015</p>
                </div>
                <span class="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">Well-controlled</span>
              </div>
            </ui-card>
          </div>
        </mat-tab>

        <mat-tab label="Medications">
          <div class="py-4 flex flex-col gap-3">
            <ui-card>
              <div card-body class="p-4">
                <p class="font-medium">Lisinopril 10mg</p>
                <p class="text-sm text-gray-500">Once daily · Hypertension · Since 2019</p>
              </div>
            </ui-card>
            <ui-card>
              <div card-body class="p-4">
                <p class="font-medium">Metformin 500mg</p>
                <p class="text-sm text-gray-500">Twice daily · Type 2 Diabetes · Since 2015</p>
              </div>
            </ui-card>
            <ui-card>
              <div card-body class="p-4">
                <p class="font-medium">Cetirizine 10mg</p>
                <p class="text-sm text-gray-500">Once daily · Seasonal allergies · Since 2021</p>
              </div>
            </ui-card>
          </div>
        </mat-tab>

        <mat-tab label="Visit History">
          <div class="py-4 flex flex-col gap-3">
            <ui-card>
              <div card-body class="p-4">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <p class="font-medium">Oct 15, 2024</p>
                    <p class="text-sm text-gray-600">Annual Physical</p>
                  </div>
                  <span class="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5">Completed</span>
                </div>
                <p class="text-sm text-gray-500">"All vitals normal. BP controlled. Continue current medications."</p>
                <ui-button variant="ghost" size="sm" class="mt-2">View Full Notes</ui-button>
              </div>
            </ui-card>
          </div>
        </mat-tab>

        <mat-tab label="Visit Notes">
          <div class="py-4 flex flex-col gap-3">
            <ui-card>
              <div card-body class="p-4">
                <p class="text-sm font-medium mb-2">Oct 15, 2024 — Dr. Annie Demers</p>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Patient presents for annual physical. BP 128/82 (controlled on Lisinopril).
                  HbA1c 6.8% — slightly elevated but manageable on current regimen.
                  Continue current medications. Follow up in 3 months.
                </p>
              </div>
            </ui-card>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
})
export class PatientChartComponent {}
