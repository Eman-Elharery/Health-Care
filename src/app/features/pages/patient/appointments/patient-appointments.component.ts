import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-appointments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-6 max-w-4xl">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">My Appointments</h1>
          <p class="text-gray-500 text-sm mt-1">Manage your upcoming and past appointments</p>
        </div>
        <a routerLink="/book-appointment"
           class="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-teal-100">
          + Book New
        </a>
      </div>

      <!-- Tabs -->
      <div class="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit mb-6">
        <button *ngFor="let tab of tabs"
          (click)="activeTab = tab"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          [ngClass]="activeTab === tab ? 'bg-white shadow text-teal-600' : 'text-gray-500'">
          {{ tab }}
        </button>
      </div>

      <!-- List -->
      <div class="space-y-4">
        <div *ngFor="let appt of filteredAppointments()"
             class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-xl flex-shrink-0">
            🩺
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-semibold text-gray-900">{{ appt.doctor }}</div>
            <div class="text-sm text-gray-500">{{ appt.specialty }}</div>
            <div class="text-xs text-gray-400 mt-1">{{ appt.date }} · {{ appt.time }}</div>
          </div>
          <div>
            <span class="px-3 py-1 rounded-full text-xs font-medium"
              [ngClass]="{
                'bg-teal-50 text-teal-700': appt.status === 'Upcoming',
                'bg-gray-100 text-gray-600': appt.status === 'Completed',
                'bg-red-50 text-red-600': appt.status === 'Cancelled'
              }">
              {{ appt.status }}
            </span>
          </div>
          <button *ngIf="appt.status === 'Upcoming'"
                  class="text-sm text-red-500 hover:text-red-700 font-medium">Cancel</button>
        </div>

        <div *ngIf="filteredAppointments().length === 0" class="text-center py-12 text-gray-400">
          <div class="text-4xl mb-3">📅</div>
          <div class="font-medium">No {{ activeTab.toLowerCase() }} appointments</div>
        </div>
      </div>
    </div>
  `
})
export class PatientAppointmentsComponent {
  activeTab = 'Upcoming';
  tabs = ['Upcoming', 'Completed', 'Cancelled'];

  appointments = [
    { doctor: 'Dr. Ahmed Hassan', specialty: 'Cardiology', date: 'Mar 15, 2026', time: '10:00 AM', status: 'Upcoming' },
    { doctor: 'Dr. Sara Ali', specialty: 'General Medicine', date: 'Mar 20, 2026', time: '2:00 PM', status: 'Upcoming' },
    { doctor: 'Dr. Nadia Ibrahim', specialty: 'Psychiatry', date: 'Feb 10, 2026', time: '11:00 AM', status: 'Completed' },
    { doctor: 'Dr. Mohamed Khaled', specialty: 'Dermatology', date: 'Jan 5, 2026', time: '3:00 PM', status: 'Completed' },
    { doctor: 'Dr. Ahmed Hassan', specialty: 'Cardiology', date: 'Dec 20, 2025', time: '9:00 AM', status: 'Cancelled' },
  ];

  filteredAppointments() {
    return this.appointments.filter(a => a.status === this.activeTab);
  }
}
