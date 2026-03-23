import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div class="w-full max-w-md">

        <!-- Logo -->
        <div class="text-center mb-8">
          <a routerLink="/" class="inline-flex items-center gap-2">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg shadow-teal-200">
              <span class="text-white font-bold text-2xl">M</span>
            </div>
            <span class="text-2xl font-semibold text-gray-900">MediCare</span>
          </a>
          <p class="mt-3 text-gray-500 text-sm">Welcome back — sign in to your account</p>
        </div>

        <!-- Card -->
        <div class="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-8">

          <!-- Role Toggle -->
          <div class="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              (click)="role = 'patient'"
              class="flex-1 py-2 rounded-lg text-sm font-medium transition-all"
              [ngClass]="role === 'patient' ? 'bg-white shadow text-teal-600' : 'text-gray-500'"
            >Patient</button>
            <button
              (click)="role = 'doctor'"
              class="flex-1 py-2 rounded-lg text-sm font-medium transition-all"
              [ngClass]="role === 'doctor' ? 'bg-white shadow text-teal-600' : 'text-gray-500'"
            >Doctor</button>
          </div>

          <!-- Form -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                [(ngModel)]="email"
                type="email"
                placeholder="you@example.com"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                [(ngModel)]="password"
                type="password"
                placeholder="••••••••"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2 text-gray-500 cursor-pointer">
                <input type="checkbox" class="rounded text-teal-500" /> Remember me
              </label>
              <a href="#" class="text-teal-600 hover:underline">Forgot password?</a>
            </div>

            <button
              (click)="submit()"
              class="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-md shadow-teal-200 mt-2"
            >
              Sign In as {{ role === 'doctor' ? 'Doctor' : 'Patient' }}
            </button>
          </div>

          <div *ngIf="error" class="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl text-center">
            {{ error }}
          </div>
        </div>

        <p class="text-center mt-6 text-sm text-gray-500">
          Don't have an account?
          <a href="#" class="text-teal-600 font-medium hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  role: 'patient' | 'doctor' = 'patient';
  error = '';

  constructor(private auth: AuthService) {}

  submit(): void {
    if (!this.email || !this.password) {
      this.error = 'Please fill in all fields.';
      return;
    }
    this.error = '';
    this.auth.login(this.email, this.password, this.role);
  }
}
