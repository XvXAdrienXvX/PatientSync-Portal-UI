import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-form-field',
  standalone: true,
  template: `
    <div class="flex flex-col gap-1 w-full">
      @if (label()) {
        <label class="text-sm font-medium text-gray-700">
          {{ label() }}
          @if (required()) {
            <span class="text-red-500 ml-0.5" aria-hidden="true">*</span>
          }
        </label>
      }

      <div [class]="wrapperClass()">
        <ng-content />
      </div>

      @if (error()) {
        <p class="text-xs text-red-600">{{ error() }}</p>
      } @else if (hint()) {
        <p class="text-xs text-gray-400">{{ hint() }}</p>
      }
    </div>
  `,
})
export class FormFieldComponent {
  readonly label = input('');
  readonly error = input('');
  readonly hint = input('');
  readonly required = input(false);
  readonly appearance = input<'outline' | 'fill'>('outline');

  protected readonly wrapperClass = computed(() => {
    const fill = this.appearance() === 'fill' ? 'bg-gray-100 rounded-t-lg border-b-2' : 'bg-white rounded-lg border';
    const state = this.error()
      ? 'border-red-400 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20'
      : 'border-gray-300 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20';
    return `flex items-center w-full transition-colors ${fill} ${state}`;
  });
}
