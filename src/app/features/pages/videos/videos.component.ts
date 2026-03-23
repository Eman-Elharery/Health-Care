import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-10">
          <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">Video Library</span>
          <h1 class="text-4xl font-bold text-gray-900">Health Videos</h1>
          <p class="text-gray-500 mt-2">Watch expert-led health education content</p>
        </div>

        <!-- Search -->
        <div class="relative max-w-md mx-auto mb-8">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input [(ngModel)]="search" type="text" placeholder="Search videos..." class="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let video of filteredVideos()" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
            <!-- Thumbnail -->
            <div class="relative h-44 bg-gradient-to-br" [ngClass]="video.gradient">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-teal-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <span class="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 text-white text-xs rounded">{{ video.duration }}</span>
            </div>
            <div class="p-5">
              <span class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{{ video.category }}</span>
              <h3 class="font-semibold text-gray-900 mt-2 mb-1 group-hover:text-teal-600 transition-colors">{{ video.title }}</h3>
              <div class="flex items-center gap-2 text-xs text-gray-400 mt-3">
                <span>{{ video.doctor }}</span>
                <span>·</span>
                <span>{{ video.views }} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class VideosPageComponent {
  search = '';

  videos = [
    { title: 'Understanding Your Heart Rate', category: 'Cardiology', doctor: 'Dr. Ahmed Hassan', duration: '8:24', views: '12.4K', gradient: 'from-red-100 to-pink-200' },
    { title: 'Healthy Meal Prep for Beginners', category: 'Nutrition', doctor: 'Dr. Sara Ali', duration: '15:30', views: '8.9K', gradient: 'from-green-100 to-emerald-200' },
    { title: 'Breathing Exercises for Anxiety', category: 'Mental Health', doctor: 'Dr. Nadia Ibrahim', duration: '10:15', views: '22.1K', gradient: 'from-purple-100 to-violet-200' },
    { title: 'Diabetes Management 101', category: 'Diabetes', doctor: 'Dr. Mohamed Khaled', duration: '12:45', views: '6.3K', gradient: 'from-orange-100 to-amber-200' },
    { title: 'Full Body Stretch Routine', category: 'Fitness', doctor: 'Dr. Ahmed Hassan', duration: '20:00', views: '31.5K', gradient: 'from-teal-100 to-cyan-200' },
    { title: 'Reading Your Blood Pressure', category: 'Cardiology', doctor: 'Dr. Sara Ali', duration: '6:50', views: '9.7K', gradient: 'from-blue-100 to-sky-200' },
  ];

  filteredVideos() {
    return this.videos.filter(v => !this.search || v.title.toLowerCase().includes(this.search.toLowerCase()));
  }
}
