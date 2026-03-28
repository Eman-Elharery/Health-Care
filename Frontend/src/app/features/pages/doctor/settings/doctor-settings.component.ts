import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-doctor-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-3xl">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
        <p class="text-gray-500 text-sm mt-1">Manage your account and preferences</p>
      </div>

      <!-- Profile -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
        <h2 class="font-semibold text-gray-900 mb-5">Profile Information</h2>
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-teal-100">A</div>
          <div>
            <div class="font-semibold text-gray-900">Dr. Ahmed Hassan</div>
            <div class="text-sm text-gray-500">Cardiologist</div>
            <button class="mt-1 text-sm text-teal-600 hover:underline">Change Photo</button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input [(ngModel)]="profile.firstName" type="text" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input [(ngModel)]="profile.lastName" type="text" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input [(ngModel)]="profile.email" type="email" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
            <select [(ngModel)]="profile.specialty" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
              <option>Cardiology</option><option>Dermatology</option><option>General Medicine</option>
              <option>Neurology</option><option>Orthopedics</option><option>Pediatrics</option>
            </select>
          </div>
          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea [(ngModel)]="profile.bio" rows="3" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"></textarea>
          </div>
        </div>
      </div>

      <!-- Notifications -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
        <h2 class="font-semibold text-gray-900 mb-4">Notifications</h2>
        <div class="space-y-4">
          <div *ngFor="let notif of notifications" class="flex items-center justify-between">
            <div>
              <div class="text-sm font-medium text-gray-900">{{ notif.label }}</div>
              <div class="text-xs text-gray-500">{{ notif.desc }}</div>
            </div>
            <button (click)="notif.enabled = !notif.enabled"
                    class="relative w-10 h-6 rounded-full transition-colors"
                    [ngClass]="notif.enabled ? 'bg-teal-500' : 'bg-gray-200'">
              <span class="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform"
                    [ngClass]="notif.enabled ? 'translate-x-5' : 'translate-x-1'"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Security -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
        <h2 class="font-semibold text-gray-900 mb-4">Security</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input type="password" placeholder="••••••••" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input type="password" placeholder="••••••••" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input type="password" placeholder="••••••••" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <button class="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-teal-100">Save Changes</button>
        <button (click)="auth.logout()" class="px-6 py-2.5 border border-red-200 text-red-600 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors">Logout</button>
      </div>
    </div>
  `
})
export class DoctorSettingsComponent {
  constructor(public auth: AuthService) {}

  profile = {
    firstName: 'Ahmed', lastName: 'Hassan', email: 'ahmed@medicare.eg',
    specialty: 'Cardiology', bio: 'Cardiologist with 15+ years of experience.',
  };

  notifications = [
    { label: 'New Appointments', desc: 'Get notified when a patient books', enabled: true },
    { label: 'Patient Messages', desc: 'Notifications for new chat messages', enabled: true },
    { label: 'Email Digest', desc: 'Weekly summary of your activity', enabled: false },
    { label: 'Appointment Reminders', desc: 'Reminders before scheduled visits', enabled: true },
  ];
}
