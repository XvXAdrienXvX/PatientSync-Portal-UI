import { Component, input, model } from '@angular/core';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [MatFormField, MatLabel, MatSelect, MatOption, MatError, MatHint],
  template: `
    <mat-form-field appearance="outline" class="w-full">
      @if (label()) {
        <mat-label>
          {{ label() }}
          @if (required()) {
            <span class="text-red-500" aria-hidden="true">*</span>
          }
        </mat-label>
      }

      <mat-select
        [value]="value()"
        (valueChange)="value.set($event)"
        [disabled]="disabled()"
        [required]="required()"
        [placeholder]="placeholder()"
      >
        @for (option of options(); track option.value) {
          <mat-option [value]="option.value" [disabled]="option.disabled ?? false">
            {{ option.label }}
          </mat-option>
        }
      </mat-select>

      @if (error()) {
        <mat-error>{{ error() }}</mat-error>
      }
      @if (hint() && !error()) {
        <mat-hint>{{ hint() }}</mat-hint>
      }
    </mat-form-field>
  `,
})
export class DropdownComponent {
  readonly label = input('');
  readonly options = input<DropdownOption[]>([]);
  readonly placeholder = input('Select an option');
  readonly error = input('');
  readonly hint = input('');
  readonly required = input(false);
  readonly disabled = input(false);
  readonly value = model<string | number | null>(null);
}
