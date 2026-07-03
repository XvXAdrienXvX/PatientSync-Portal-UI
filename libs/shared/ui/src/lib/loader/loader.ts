import { Component, computed, input } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

type Size = 'sm' | 'md' | 'lg';

const DIAMETERS: Record<Size, number> = { sm: 20, md: 32, lg: 48 };

@Component({
  selector: 'ui-loader',
  standalone: true,
  imports: [MatProgressSpinner],
  template: `
    <div role="status" [attr.aria-label]="label()" [class]="wrapperClasses()">
      <mat-progress-spinner mode="indeterminate" [diameter]="diameter()" />
      <span class="sr-only">{{ label() }}</span>
      <ng-content />
    </div>
  `,
})
export class LoaderComponent {
  readonly size = input<Size>('md');
  readonly label = input('Loading...');
  readonly fullscreen = input(false);

  protected readonly diameter = computed(() => DIAMETERS[this.size()]);

  protected readonly wrapperClasses = computed(() =>
    this.fullscreen()
      ? 'fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-sm'
      : 'flex items-center justify-center gap-3 p-4'
  );
}
