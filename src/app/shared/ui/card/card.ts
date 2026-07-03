import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-card',
  standalone: true,
  template: `
    <div [class]="classes()">
      <ng-content select="[card-header]" />
      <ng-content select="[card-body]" />
      <ng-content />
      <ng-content select="[card-footer]" />
    </div>
  `,
})
export class CardComponent {
  readonly appearance = input<'outlined' | 'raised'>('outlined');

  protected readonly classes = computed(() =>
    this.appearance() === 'raised'
      ? 'rounded-xl bg-white shadow-md overflow-hidden'
      : 'rounded-xl bg-white border border-gray-200 overflow-hidden'
  );
}
