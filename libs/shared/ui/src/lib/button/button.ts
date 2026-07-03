import { Component, computed, input } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatRipple } from '@angular/material/core';

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [MatRipple, MatProgressSpinner],
  template: `
    <button
      matRipple
      [matRippleDisabled]="disabled() || loading()"
      [type]="type()"
      [disabled]="disabled() || loading()"
      [class]="classes()"
    >
      @if (loading()) {
        <mat-progress-spinner mode="indeterminate" [diameter]="spinnerDiameter()" class="shrink-0" />
      }
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  readonly variant = input<Variant>('primary');
  readonly size = input<Size>('md');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);
  readonly loading = input(false);

  protected readonly classes = computed(() => {
    const v: Record<Variant, string> = {
      primary:   'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
      secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300',
      danger:    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
      ghost:     'text-gray-600 hover:bg-gray-100 active:bg-gray-200',
      outline:   'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100',
    };
    const s: Record<Size, string> = {
      sm: 'h-8 px-3 text-xs gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2.5',
    };
    return `relative inline-flex items-center justify-center overflow-hidden rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${v[this.variant()]} ${s[this.size()]}`;
  });

  protected readonly spinnerDiameter = computed(() =>
    ({ sm: 14, md: 16, lg: 20 })[this.size()]
  );
}
