import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-appointments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 max-w-5xl">
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Appointments</h1>
          <p class="text-gray-500 text-sm mt-1">Manage your patient schedule</p>
        </div>
        <div class="flex gap-2">
          <button *ngFor="let v of views" (click)="activeView = v"
            class="px-4 py-2 rounded-xl text-sm font-medium border transition-all"
            [ngClass]="activeView === v ? 'bg-teal-500 text-white border-teal-500' : 'bg-white text-gray-600 border-gray-200'">
            {{ v }}
          </button>
        </div>
      </div>

      <!-- Stats row -->
      <div class="grid grid-cols-4 gap-4 mb-8">
        <div *ngFor="let stat of stats" class="bg-white rounded-2xl border border-gray-100 p-4 text-center shadow-sm">
          <div class="text-2xl font-bold" [ngClass]="stat.color">{{ stat.value }}</div>
          <div class="text-xs text-gray-500 mt-1">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr>
              <th class="text-left px-5 py-3 font-medium text-gray-600">Patient</th>
              <th class="text-left px-5 py-3 font-medium text-gray-600">Date & Time</th>
              <th class="text-left px-5 py-3 font-medium text-gray-600">Reason</th>
              <th class="text-left px-5 py-3 font-medium text-gray-600">Status</th>
              <th class="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr *ngFor="let appt of appointments" class="hover:bg-gray-50 transition-colors">
              <td class="px-5 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-xs font-bold text-teal-700">
                    {{ appt.patient[0] }}
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">{{ appt.patient }}</div>
                    <div class="text-xs text-gray-400">{{ appt.age }} yrs · {{ appt.gender }}</div>
                  </div>
                </div>
              </td>
              <td class="px-5 py-4 text-gray-600">
                <div>{{ appt.date }}</div>
                <div class="text-xs text-gray-400">{{ appt.time }}</div>
              </td>
              <td class="px-5 py-4 text-gray-600">{{ appt.reason }}</td>
              <td class="px-5 py-4">
                <span class="px-2 py-1 rounded-full text-xs font-medium"
                  [ngClass]="{
                    'bg-teal-50 text-teal-700': appt.status === 'Confirmed',
                    'bg-yellow-50 text-yellow-700': appt.status === 'Pending',
                    'bg-gray-100 text-gray-600': appt.status === 'Completed'
                  }">{{ appt.status }}</span>
              </td>
              <td class="px-5 py-4 text-right">
                <button class="text-teal-600 hover:text-teal-800 text-xs font-medium">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class DoctorAppointmentsComponent {
  activeView = 'Today';
  views = ['Today', 'This Week', 'All'];

  stats = [
    { value: '8', label: 'Today', color: 'text-teal-600' },
    { value: '34', label: 'This Week', color: 'text-blue-600' },
    { value: '2', label: 'Pending', color: 'text-yellow-600' },
    { value: '142', label: 'This Month', color: 'text-gray-700' },
  ];

  appointments = [
    { patient: 'Sara Mohamed', age: 30, gender: 'Female', date: 'Mar 13, 2026', time: '9:00 AM', reason: 'Chest Pain', status: 'Confirmed' },
    { patient: 'Ahmed Ali', age: 45, gender: 'Male', date: 'Mar 13, 2026', time: '10:00 AM', reason: 'Follow-up', status: 'Confirmed' },
    { patient: 'Nour Hassan', age: 28, gender: 'Female', date: 'Mar 13, 2026', time: '11:00 AM', reason: 'Palpitations', status: 'Pending' },
    { patient: 'Omar Khaled', age: 55, gender: 'Male', date: 'Mar 13, 2026', time: '2:00 PM', reason: 'Blood Pressure', status: 'Confirmed' },
    { patient: 'Layla Ibrahim', age: 38, gender: 'Female', date: 'Mar 12, 2026', time: '3:00 PM', reason: 'ECG Review', status: 'Completed' },
  ];
}
