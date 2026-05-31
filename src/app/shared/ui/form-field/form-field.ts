import { Component, input } from '@angular/core';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ui-form-field',
  standalone: true,
  imports: [MatFormField, MatLabel, MatError, MatHint, MatInputModule],
  template: `
    <mat-form-field [appearance]="appearance()" class="w-full">
      @if (label()) {
        <mat-label>
          {{ label() }}
          @if (required()) {
            <span class="text-red-500" aria-hidden="true">*</span>
          }
        </mat-label>
      }

      <ng-content />

      @if (error()) {
        <mat-error>{{ error() }}</mat-error>
      }
      @if (hint() && !error()) {
        <mat-hint>{{ hint() }}</mat-hint>
      }
    </mat-form-field>
  `,
})
export class FormFieldComponent {
  readonly label = input('');
  readonly error = input('');
  readonly hint = input('');
  readonly required = input(false);
  readonly appearance = input<'outline' | 'fill'>('outline');
}
