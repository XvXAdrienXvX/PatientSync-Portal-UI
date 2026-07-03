import { Component, computed, input } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline' | 'success';
type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  standalone: true,
  template: `
    <button [type]="type()" [disabled]="disabled() || loading()" [class]="classes()" [style.width]="buttonWidth()">
      @if (loading()) {
        <svg class="animate-spin shrink-0" [class]="spinnerSize()" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
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
  readonly width = input('');

  protected readonly classes = computed(() => {
    const v: Record<Variant, string> = {
      primary:   'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-500 border border-transparent',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300 focus-visible:ring-slate-400 border border-transparent',
      danger:    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500 border border-transparent',
      success:   'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus-visible:ring-green-500 border border-transparent',
      ghost:     'text-primary-700 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-400 border border-transparent bg-transparent',
      outline:   'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100 focus-visible:ring-slate-400',
    };
    const s: Record<Size, string> = {
      sm: 'min-h-[2.25rem] px-4 text-xs',
      md: 'min-h-[2.75rem] px-5 text-sm',
      lg: 'min-h-[3rem] px-6 text-base',
    };
    return `inline-flex items-center justify-center rounded-md font-medium transition duration-200 ease-out shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:bg-slate-200 disabled:text-slate-400 ${v[this.variant()]} ${s[this.size()]}`;
  });

  protected readonly spinnerSize = computed(() => ({ sm: 'h-3 w-3', md: 'h-4 w-4', lg: 'h-5 w-5' })[this.size()]);
  protected readonly buttonWidth = computed(() => this.width() || null);
}
