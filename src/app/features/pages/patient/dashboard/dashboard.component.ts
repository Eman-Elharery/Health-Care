import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-500 text-sm font-medium">Upcoming Appointments</span>
            <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-gray-900">3</p>
          <p class="text-sm text-green-600 mt-1">Next: Tomorrow 10:00 AM</p>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-500 text-sm font-medium">Unread Messages</span>
            <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-gray-900">5</p>
          <p class="text-sm text-gray-400 mt-1">2 from Dr. Hassan</p>
        </div>

        <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-500 text-sm font-medium">Saved Articles</span>
            <div class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold text-gray-900">12</p>
          <p class="text-sm text-gray-400 mt-1">3 new this week</p>
        </div>
      </div>

      <!-- Placeholder content -->
      <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 class="font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div class="space-y-3">
          <div *ngFor="let item of activities" class="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
            <div class="w-2 h-2 rounded-full bg-teal-500 shrink-0"></div>
            <p class="text-sm text-gray-600">{{ item.text }}</p>
            <span class="text-xs text-gray-400 ml-auto whitespace-nowrap">{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent {
  activities = [
    { text: 'Appointment confirmed with Dr. Hassan', time: '2 hours ago' },
    { text: 'New article: 10 Tips for Heart Health', time: '5 hours ago' },
    { text: 'Prescription renewed successfully', time: 'Yesterday' },
    { text: 'Lab results available in your portal', time: '2 days ago' },
  ];
}
