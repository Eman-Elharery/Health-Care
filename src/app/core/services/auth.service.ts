import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor';
  avatar?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);
  user = this._user.asReadonly();

  constructor(private router: Router) {
    const stored = localStorage.getItem('medicare_user');
    if (stored) this._user.set(JSON.parse(stored));
  }

  login(email: string, password: string, role: 'patient' | 'doctor'): boolean {
    // Mock login — replace with real API call
    const user: User = {
      id: '1',
      name: role === 'doctor' ? 'Dr. Ahmed Hassan' : 'Sara Mohamed',
      email,
      role,
    };
    this._user.set(user);
    localStorage.setItem('medicare_user', JSON.stringify(user));
    this.router.navigate([role === 'doctor' ? '/doctor' : '/patient']);
    return true;
  }

  logout(): void {
    this._user.set(null);
    localStorage.removeItem('medicare_user');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this._user() !== null;
  }

  hasRole(role: 'patient' | 'doctor'): boolean {
    return this._user()?.role === role;
  }
}
