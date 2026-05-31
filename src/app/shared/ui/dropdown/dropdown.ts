import { Component, computed, input, model } from '@angular/core';

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

@Component({
  selector: 'ui-dropdown',
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

      <select
        [value]="value()"
        (change)="onChange($event)"
        [disabled]="disabled()"
        [required]="required()"
        [class]="selectClass()"
      >
        <option value="" disabled [selected]="value() === null">{{ placeholder() }}</option>
        @for (option of options(); track option.value) {
          <option [value]="option.value" [disabled]="option.disabled ?? false">
            {{ option.label }}
          </option>
        }
      </select>

      @if (error()) {
        <p class="text-xs text-red-600">{{ error() }}</p>
      } @else if (hint()) {
        <p class="text-xs text-gray-400">{{ hint() }}</p>
      }
    </div>
  `,
})
export class DropdownComponent {
  readonly label = input('');
  readonly options = input<DropdownOption[]>([]);
  readonly placeholder = input('Select an option');
  readonly error = input('');
  readonly hint = input('');
  readonly required = input(false);
  readonly disabled = input(false);
  readonly value = model<string | number | null>(null);

  protected readonly selectClass = computed(() => {
    const state = this.error()
      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20';
    return `w-full rounded-lg border px-3 py-2 text-sm text-gray-900 bg-white transition-colors focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed ${state}`;
  });

  protected onChange(event: Event): void {
    const raw = (event.target as HTMLSelectElement).value;
    const num = Number(raw);
    this.value.set(isNaN(num) || raw === '' ? raw : num);
  }
}
