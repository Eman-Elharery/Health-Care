import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-videos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 max-w-5xl">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Health Videos</h1>
        <p class="text-gray-500 text-sm mt-1">Watch expert health education videos</p>
      </div>

      <!-- Continue Watching -->
      <div class="mb-8">
        <h2 class="font-semibold text-gray-800 mb-4">Continue Watching</h2>
        <div class="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 items-center">
          <div class="relative w-32 h-20 rounded-xl bg-gradient-to-br from-teal-100 to-blue-200 flex-shrink-0 flex items-center justify-center">
            <div class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-teal-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-semibold text-gray-900 text-sm">Understanding Your Heart Rate</div>
            <div class="text-xs text-gray-500 mt-0.5">Dr. Ahmed Hassan · 8:24</div>
            <div class="mt-2 bg-gray-100 rounded-full h-1.5 w-full">
              <div class="bg-teal-500 h-1.5 rounded-full w-2/3"></div>
            </div>
            <div class="text-xs text-gray-400 mt-1">5:36 remaining</div>
          </div>
          <button class="px-4 py-2 bg-teal-50 text-teal-600 rounded-xl text-sm font-medium hover:bg-teal-100 transition-colors">Resume</button>
        </div>
      </div>

      <!-- All Videos -->
      <h2 class="font-semibold text-gray-800 mb-4">All Videos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div *ngFor="let video of videos" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
          <div class="relative h-36 bg-gradient-to-br" [ngClass]="video.gradient">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-teal-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <span class="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/70 text-white text-xs rounded">{{ video.duration }}</span>
          </div>
          <div class="p-4">
            <span class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg">{{ video.category }}</span>
            <h3 class="font-semibold text-gray-900 mt-2 text-sm group-hover:text-teal-600 transition-colors">{{ video.title }}</h3>
            <div class="text-xs text-gray-400 mt-2">{{ video.doctor }}</div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PatientVideosComponent {
  videos = [
    { title: 'Understanding Your Heart Rate', category: 'Cardiology', doctor: 'Dr. Ahmed Hassan', duration: '8:24', gradient: 'from-red-100 to-pink-200' },
    { title: 'Healthy Meal Prep for Beginners', category: 'Nutrition', doctor: 'Dr. Sara Ali', duration: '15:30', gradient: 'from-green-100 to-emerald-200' },
    { title: 'Breathing Exercises for Anxiety', category: 'Mental Health', doctor: 'Dr. Nadia Ibrahim', duration: '10:15', gradient: 'from-purple-100 to-violet-200' },
    { title: 'Diabetes Management 101', category: 'Diabetes', doctor: 'Dr. Mohamed Khaled', duration: '12:45', gradient: 'from-orange-100 to-amber-200' },
    { title: 'Full Body Stretch Routine', category: 'Fitness', doctor: 'Dr. Ahmed Hassan', duration: '20:00', gradient: 'from-teal-100 to-cyan-200' },
  ];
}
