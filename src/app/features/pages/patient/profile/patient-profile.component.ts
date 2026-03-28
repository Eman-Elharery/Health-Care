import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';


@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-3xl">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">My Profile</h1>
        <p class="text-gray-500 text-sm mt-1">Manage your personal and medical information</p>
      </div>

      <!-- Avatar Section -->
      <div class="bg-white rounded-2xl border border-gray-100 p-6 flex items-center gap-5 mb-6">
        <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-teal-100">
          S
        </div>
        <div>
          <div class="text-xl font-bold text-gray-900">Sara Mohamed</div>
          <div class="text-gray-500 text-sm">Patient ID: #PT-00123</div>
          <button class="mt-2 text-sm text-teal-600 font-medium hover:underline">Change Photo</button>
        </div>
      </div>

      <!-- Personal Info -->
      <div class="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 class="font-semibold text-gray-900 mb-5">Personal Information</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input [(ngModel)]="profile.firstName" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input [(ngModel)]="profile.lastName" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input [(ngModel)]="profile.email" type="email" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input [(ngModel)]="profile.phone" type="tel" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input [(ngModel)]="profile.dob" type="date" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
            <select [(ngModel)]="profile.bloodType" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
              <option *ngFor="let bt of bloodTypes" [value]="bt">{{ bt }}</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Medical Info -->
      <div class="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 class="font-semibold text-gray-900 mb-5">Medical Information</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
            <input [(ngModel)]="profile.allergies" type="text" placeholder="e.g. Penicillin, Peanuts" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Current Medications</label>
            <textarea [(ngModel)]="profile.medications" rows="3" placeholder="List your current medications..." class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Chronic Conditions</label>
            <input [(ngModel)]="profile.conditions" type="text" placeholder="e.g. Hypertension, Diabetes" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <button class="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-teal-100">
          Save Changes
        </button>
        <button (click)="auth.logout()" class="px-6 py-3 border border-red-200 text-red-600 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors">
          Logout
        </button>
      </div>
    </div>
  `
})
export class PatientProfileComponent {
  constructor(public auth: AuthService) {}

  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  profile = {
    firstName: 'Sara',
    lastName: 'Mohamed',
    email: 'sara@example.com',
    phone: '+20 100 000 0000',
    dob: '1995-06-15',
    bloodType: 'O+',
    allergies: 'None',
    medications: 'Vitamin D 1000 IU daily',
    conditions: 'None',
  };
}
