import { Component, input, output } from '@angular/core';

export type UserRole = 'patient' | 'doctor';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex items-center h-14 px-4 bg-white border-b border-gray-200 shadow-sm shrink-0">
      <span class="flex-1"></span>
      <span class="text-sm text-gray-600 mr-3 hidden sm:block">{{ userName() }}</span>
      <button
        type="button"
        class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
        aria-label="Logout"
        (click)="loggedOut.emit()"
      >
        <span class="material-icons text-[22px]">logout</span>
      </button>
    </header>
  `,
})
export class HeaderComponent {
  readonly userName = input('');
  readonly role = input<UserRole>('patient');
  readonly menuToggled = output<void>();
  readonly loggedOut = output<void>();
}
