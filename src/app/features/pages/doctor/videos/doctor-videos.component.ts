import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Video {
  id: number;
  title: string;
  category: string;
  duration: string;
  views: string;
  date: string;
}

@Component({
  selector: 'app-doctor-videos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-5xl">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Manage Videos</h1>
          <p class="text-gray-500 text-sm mt-1">{{ videos.length }} videos uploaded</p>
        </div>
        <button (click)="openDialog()"
          class="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-teal-100 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          Upload Video
        </button>
      </div>

      <!-- List -->
      <div class="space-y-3">
        <div *ngFor="let video of videos"
             class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
          <div class="w-16 h-11 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 truncate">{{ video.title }}</div>
            <div class="text-xs text-gray-400 mt-0.5">{{ video.category }} · {{ video.duration }} · {{ video.views }} views</div>
          </div>
          <div class="flex gap-2 flex-shrink-0">
            <button (click)="editVideo(video)"
                    class="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            </button>
            <button (click)="deleteVideo(video.id)"
                    class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div *ngIf="showDialog" class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.4)">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 class="font-semibold text-gray-900">{{ editingId ? 'Edit Video' : 'Upload Video' }}</h2>
            <button (click)="closeDialog()" class="p-1 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="p-6 space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input [(ngModel)]="form.title" type="text" placeholder="Video title..." class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select [(ngModel)]="form.category" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
                <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <input [(ngModel)]="form.duration" type="text" placeholder="e.g. 12:34" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
                <input [(ngModel)]="form.url" type="url" placeholder="YouTube / Vimeo URL" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
            </div>
            <button (click)="saveVideo()"
                    class="w-full py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
              {{ editingId ? 'Update' : 'Upload' }} Video
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DoctorVideosComponent {
  showDialog = false;
  editingId: number | null = null;
  nextId = 4;
  categories = ['Cardiology', 'Nutrition', 'Mental Health', 'Diabetes', 'Fitness', 'General'];
  form = { title: '', category: 'Cardiology', duration: '', url: '' };

  videos: Video[] = [
    { id: 1, title: 'Understanding Your Heart Rate', category: 'Cardiology', duration: '8:24', views: '12.4K', date: 'Mar 10, 2026' },
    { id: 2, title: 'Healthy Meal Prep for Beginners', category: 'Nutrition', duration: '15:30', views: '8.9K', date: 'Mar 5, 2026' },
    { id: 3, title: 'Breathing Exercises for Anxiety', category: 'Mental Health', duration: '10:15', views: '22.1K', date: 'Feb 28, 2026' },
  ];

  openDialog(): void {
    this.editingId = null;
    this.form = { title: '', category: 'Cardiology', duration: '', url: '' };
    this.showDialog = true;
  }

  editVideo(v: Video): void {
    this.editingId = v.id;
    this.form = { title: v.title, category: v.category, duration: v.duration, url: '' };
    this.showDialog = true;
  }

  closeDialog(): void { this.showDialog = false; }

  saveVideo(): void {
    if (!this.form.title.trim()) return;
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    if (this.editingId) {
      const idx = this.videos.findIndex(v => v.id === this.editingId);
      if (idx > -1) this.videos[idx] = { ...this.videos[idx], title: this.form.title, category: this.form.category, duration: this.form.duration };
    } else {
      this.videos.unshift({ id: this.nextId++, title: this.form.title, category: this.form.category, duration: this.form.duration, views: '0', date });
    }
    this.closeDialog();
  }

  deleteVideo(id: number): void {
    this.videos = this.videos.filter(v => v.id !== id);
  }
}
