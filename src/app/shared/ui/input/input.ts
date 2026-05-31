import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';

/**
 * Attribute-selector component: <input ui-input [formControl]="..." />
 * Must be placed inside a <ui-form-field> (or raw <mat-form-field>).
 * MatInput registers the element with the parent form field, enabling
 * Material's label float, error display, and focus ring.
 */
@Component({
  selector: 'input[ui-input], textarea[ui-input]',
  standalone: true,
  template: '',
  hostDirectives: [MatInput],
})
export class InputComponent {}
