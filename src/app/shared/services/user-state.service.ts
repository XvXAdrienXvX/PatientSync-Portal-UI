import { Injectable, signal } from '@angular/core';
import { Users } from '../../features/auth/types/users';

@Injectable({ providedIn: 'root' })
export class UserStateService {
  private readonly currentUserSignal = signal<Users | null>(null);

  readonly currentUser = this.currentUserSignal.asReadonly();

  setCurrentUser(user: Users | null): void {
    this.currentUserSignal.set(user);
  }

  isLoggedIn(): boolean {
    return this.currentUserSignal() !== null;
  }
}
