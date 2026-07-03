import { Component } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { CardComponent, ButtonComponent } from '@patientsync/shared/ui';

@Component({
  selector: 'app-health-records',
  standalone: true,
  imports: [MatTabGroup, MatTab, CardComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Health Records</h1>
        <div class="flex gap-2">
          <ui-button variant="outline" size="sm">Download PDF</ui-button>
          <ui-button variant="ghost" size="sm">Print</ui-button>
        </div>
      </div>

      <mat-tab-group>
        <!-- My Information -->
        <mat-tab label="My Info">
          <div class="py-4 flex flex-col gap-4">
            <ui-card>
              <div card-body class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><p class="text-xs text-gray-500">Full Name</p><p class="font-medium">John Smith</p></div>
                <div><p class="text-xs text-gray-500">Date of Birth</p><p class="font-medium">March 15, 1985</p></div>
                <div><p class="text-xs text-gray-500">Phone</p><p class="font-medium">(555) 987-6543</p></div>
                <div><p class="text-xs text-gray-500">Email</p><p class="font-medium">john&#64;patient.com</p></div>
                <div class="sm:col-span-2"><p class="text-xs text-gray-500">Address</p><p class="font-medium">123 Main St, Montreal, QC H3A 1A1</p></div>
              </div>
            </ui-card>
            <ui-card>
              <div card-body class="p-4">
                <p class="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Allergies</p>
                <span class="inline-block bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm font-medium">
                  Penicillin — Anaphylaxis risk
                </span>
              </div>
            </ui-card>
          </div>
        </mat-tab>

        <!-- Conditions -->
        <mat-tab label="Conditions">
          <div class="py-4 flex flex-col gap-3">
            @for (condition of conditions; track condition.name) {
              <ui-card>
                <div card-body class="p-4 flex justify-between items-start">
                  <div>
                    <p class="font-medium">{{ condition.name }}</p>
                    <p class="text-sm text-gray-500">Diagnosed: {{ condition.diagnosed }}</p>
                  </div>
                  <span class="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">{{ condition.status }}</span>
                </div>
              </ui-card>
            }
          </div>
        </mat-tab>

        <!-- Medications -->
        <mat-tab label="Medications">
          <div class="py-4 flex flex-col gap-3">
            @for (med of medications; track med.name) {
              <ui-card>
                <div card-body class="p-4">
                  <p class="font-medium">{{ med.name }} {{ med.dosage }}</p>
                  <p class="text-sm text-gray-500">{{ med.frequency }} — {{ med.reason }}</p>
                  <p class="text-xs text-gray-400">Since {{ med.since }}</p>
                </div>
              </ui-card>
            }
          </div>
        </mat-tab>

        <!-- Allergies -->
        <mat-tab label="Allergies">
          <div class="py-4 flex flex-col gap-3">
            <ui-card>
              <div card-body class="p-4 flex justify-between items-start">
                <div>
                  <p class="font-medium text-red-700">Penicillin</p>
                  <p class="text-sm text-gray-600">Reaction: Hives, throat swelling</p>
                  <p class="text-xs text-gray-400">Documented: 2018</p>
                </div>
                <span class="text-xs bg-red-100 text-red-700 rounded-full px-2 py-0.5">Severe</span>
              </div>
            </ui-card>
          </div>
        </mat-tab>

        <!-- Visit History -->
        <mat-tab label="Visit History">
          <div class="py-4 flex flex-col gap-3">
            <ui-card>
              <div card-body class="p-4">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <p class="font-medium">Oct 15, 2024 — Dr. Annie Demers</p>
                    <p class="text-sm text-gray-600">Annual Physical</p>
                  </div>
                  <span class="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5">Completed</span>
                </div>
                <p class="text-sm text-gray-500">"All vitals normal. BP controlled. Continue current medications."</p>
              </div>
            </ui-card>
          </div>
        </mat-tab>

        <!-- Lab Results -->
        <mat-tab label="Lab Results">
          <div class="py-4 flex flex-col gap-3">
            <ui-card>
              <div card-body class="p-4 flex justify-between items-center">
                <div>
                  <p class="font-medium">HbA1c</p>
                  <p class="text-sm text-gray-500">6.8% (normal &lt;5.7%)</p>
                  <p class="text-xs text-gray-400">Oct 15, 2024</p>
                </div>
                <span class="text-xs bg-amber-100 text-amber-700 rounded-full px-2 py-0.5">Borderline</span>
              </div>
            </ui-card>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
})
export class HealthRecordsComponent {
  protected readonly conditions = [
    { name: 'Hypertension', diagnosed: '2019', status: 'Controlled' },
    { name: 'Type 2 Diabetes', diagnosed: '2015', status: 'Well-controlled' },
  ];

  protected readonly medications = [
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', reason: 'Hypertension', since: '2019' },
    { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', reason: 'Type 2 Diabetes', since: '2015' },
    { name: 'Cetirizine', dosage: '10mg', frequency: 'Once daily', reason: 'Seasonal allergies', since: '2021' },
  ];
}
