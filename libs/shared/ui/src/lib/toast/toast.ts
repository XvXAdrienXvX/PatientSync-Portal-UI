import { Component, computed, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

const ICONS: Record<ToastType, string> = {
  success: 'check_circle',
  error:   'cancel',
  warning: 'warning',
  info:    'info',
};

@Component({
  selector: 'ui-toast',
  standalone: true,
  imports: [MatIcon, MatIconButton],
  template: `
    <div role="alert" [class]="containerClasses()">
      <mat-icon class="shrink-0 !h-5 !w-5 !text-[20px] mt-0.5" aria-hidden="true">
        {{ icon() }}
      </mat-icon>

      <div class="min-w-0 flex-1">
        @if (title()) {
          <p class="text-sm font-semibold">{{ title() }}</p>
        }
        <p class="text-sm">{{ message() }}</p>
      </div>

      @if (dismissible()) {
        <button
          mat-icon-button
          type="button"
          class="!h-6 !w-6 shrink-0 opacity-60 hover:opacity-100"
          aria-label="Dismiss"
          (click)="dismissed.emit()"
        >
          <mat-icon class="!text-[18px]">close</mat-icon>
        </button>
      }
    </div>
  `,
})
export class ToastComponent {
  readonly type = input<ToastType>('info');
  readonly title = input('');
  readonly message = input.required<string>();
  readonly dismissible = input(true);

  readonly dismissed = output<void>();

  protected readonly icon = computed(() => ICONS[this.type()]);

  protected readonly containerClasses = computed(() => {
    const t: Record<ToastType, string> = {
      success: 'border-green-200 bg-green-50 text-green-800',
      error:   'border-red-200 bg-red-50 text-red-800',
      warning: 'border-amber-200 bg-amber-50 text-amber-800',
      info:    'border-blue-200 bg-blue-50 text-blue-800',
    };
    return `flex items-start gap-3 rounded-xl border p-4 shadow-md ${t[this.type()]}`;
  });
}
