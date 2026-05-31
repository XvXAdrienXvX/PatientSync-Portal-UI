import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../shared/ui/card/card';
import { FormFieldComponent } from '../../../shared/ui/form-field/form-field';
import { InputComponent } from '../../../shared/ui/input/input';
import { ButtonComponent } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-patient-search',
  standalone: true,
  imports: [RouterLink, CardComponent, FormFieldComponent, InputComponent, ButtonComponent],
  template: `
    <div class="flex flex-col gap-6">
      <h1 class="text-2xl font-bold">Patient Search</h1>

      <ui-form-field label="Search patients">
        <input ui-input type="search" placeholder="Search by name or patient ID..." />
      </ui-form-field>

      <div class="flex flex-col gap-3">
        @for (patient of results; track patient.id) {
          <ui-card appearance="outlined">
            <div card-body class="p-4 flex items-center justify-between gap-4">
              <div>
                <p class="font-medium">{{ patient.name }}</p>
                <p class="text-sm text-gray-500">DOB: {{ patient.dob }}</p>
                <p class="text-sm text-gray-400">{{ patient.phone }}</p>
              </div>
              <ui-button variant="primary" size="sm" [routerLink]="['/doctor/patient-chart', patient.id]">
                View Chart
              </ui-button>
            </div>
          </ui-card>
        }
      </div>
    </div>
  `,
})
export class PatientSearchComponent {
  protected readonly results = [
    { id: '1', name: 'John Smith',    dob: '1985-03-15', phone: '(555) 987-6543' },
    { id: '2', name: 'Sarah Johnson', dob: '1992-07-22', phone: '(555) 234-5678' },
    { id: '3', name: 'Michael Brown', dob: '1978-11-05', phone: '(555) 345-6789' },
  ];
}
