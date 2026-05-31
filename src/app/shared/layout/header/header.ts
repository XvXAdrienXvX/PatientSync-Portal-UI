import { Component, input, output } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

export type UserRole = 'patient' | 'doctor';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, MatIconButton, MatIcon],
  template: `
    <mat-toolbar class="!bg-white shadow-sm border-b !px-4">
      <span class="font-bold text-lg">Admedica</span>
      <span class="flex-1"></span>
      <span class="text-sm text-gray-600 mr-2 hidden sm:block">{{ userName() }}</span>
      <button mat-icon-button (click)="menuToggled.emit()" aria-label="Toggle menu">
        <mat-icon>menu</mat-icon>
      </button>
      <button mat-icon-button (click)="loggedOut.emit()" aria-label="Logout">
        <mat-icon>logout</mat-icon>
      </button>
    </mat-toolbar>
  `,
})
export class HeaderComponent {
  readonly userName = input('');
  readonly role = input<UserRole>('patient');
  readonly menuToggled = output<void>();
  readonly loggedOut = output<void>();
}
