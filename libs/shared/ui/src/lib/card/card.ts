import { Component, input } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [MatCard],
  template: `
    <mat-card [appearance]="appearance()" class="!rounded-xl !p-0 overflow-hidden">
      <ng-content select="[card-header]" />
      <ng-content select="[card-body]" />
      <ng-content />
      <ng-content select="[card-footer]" />
    </mat-card>
  `,
})
export class CardComponent {
  readonly appearance = input<'outlined' | 'raised'>('outlined');
}
