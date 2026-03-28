import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900">Good morning, Dr. Hassan 👋</h2>
        <p class="text-gray-400 mt-1">You have 8 appointments today</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <p class="text-2xl font-bold text-gray-900">8</p>
          <p class="text-sm text-gray-400 mt-1">Today's Appointments</p>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <p class="text-2xl font-bold text-gray-900">2,541</p>
          <p class="text-sm text-gray-400 mt-1">Total Patients</p>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <p class="text-2xl font-bold text-gray-900">14</p>
          <p class="text-sm text-gray-400 mt-1">Pending Messages</p>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <p class="text-2xl font-bold text-gray-900">7</p>
          <p class="text-sm text-gray-400 mt-1">Published Articles</p>
        </div>
      </div>

      <!-- Today's schedule -->
      <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 class="font-semibold text-gray-900 mb-4">Today's Schedule</h3>
        <div class="space-y-3">
          <div *ngFor="let appt of appointments"
               class="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div class="text-center w-14 shrink-0">
              <p class="text-sm font-semibold text-teal-600">{{ appt.time }}</p>
            </div>
            <img [src]="appt.avatar" [alt]="appt.name" class="w-10 h-10 rounded-full object-cover"/>
            <div class="flex-1">
              <p class="font-medium text-gray-900 text-sm">{{ appt.name }}</p>
              <p class="text-xs text-gray-400">{{ appt.type }}</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-medium"
                  [ngClass]="appt.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'">
              {{ appt.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DoctorDashboardComponent {
  appointments = [
    { time: '09:00', name: 'Sarah Mitchell', type: 'General Consultation', status: 'Confirmed', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { time: '10:30', name: 'Michael Chen', type: 'Follow-up', status: 'Confirmed', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { time: '12:00', name: 'Emily Rodriguez', type: 'Mental Health', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    { time: '14:00', name: 'James Wilson', type: 'Cardiology Check', status: 'Confirmed', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
  ];
}
