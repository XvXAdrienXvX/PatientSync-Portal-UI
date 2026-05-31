import { Component, computed, input } from '@angular/core';

type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-loader',
  standalone: true,
  template: `
    <div role="status" [attr.aria-label]="label()" [class]="wrapperClass()">
      <div class="animate-spin rounded-full border-2 border-current border-t-transparent" [class]="spinnerClass()"></div>
      <span class="sr-only">{{ label() }}</span>
      <ng-content />
    </div>
  `,
})
export class LoaderComponent {
  readonly size = input<Size>('md');
  readonly label = input('Loading...');
  readonly fullscreen = input(false);

  protected readonly spinnerClass = computed(() => ({ sm: 'h-5 w-5', md: 'h-8 w-8', lg: 'h-12 w-12' })[this.size()]);

  protected readonly wrapperClass = computed(() =>
    this.fullscreen()
      ? 'fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-sm'
      : 'flex items-center justify-center gap-3 p-4'
  );
}
