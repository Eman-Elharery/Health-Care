import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Video {
  id: number;
  title: string;
  category: string;
  src: string;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div class="max-w-6xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-10">
          <span class="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-3">Video Library</span>
          <h1 class="text-4xl font-bold text-gray-900">Health Videos</h1>
          <p class="text-gray-500 mt-2">Watch expert health education content by Dr. Ahmed Mukhtar</p>
        </div>

        <!-- Search & Filter -->
        <div class="flex flex-col md:flex-row gap-4 mb-8 items-center">
          <div class="relative flex-1 w-full">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input [(ngModel)]="search" type="text" placeholder="Search videos..."
              class="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
          </div>
          <div class="flex gap-2 flex-wrap justify-center">
            <button *ngFor="let cat of categories"
              (click)="activeCategory = cat"
              class="px-4 py-2 rounded-xl text-sm font-medium transition-all border"
              [ngClass]="activeCategory === cat
                ? 'bg-teal-500 text-white border-teal-500'
                : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300'">
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Videos Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div *ngFor="let video of filteredVideos()"
               (click)="openPlayer(video)"
               class="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">

            <!-- Thumbnail / preview -->
            <div class="relative aspect-video bg-gray-900 overflow-hidden">
              <video
                [src]="video.src + '#t=0.5'"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                preload="metadata"
                [muted]="true">
              </video>
              <!-- Play overlay -->
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div class="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg class="w-6 h-6 text-teal-600 fill-teal-600 ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <!-- Category badge -->
              <div class="absolute top-3 left-3">
                <span class="bg-teal-600/90 text-white px-2 py-1 rounded text-xs font-medium">
                  {{ video.category }}
                </span>
              </div>
            </div>

            <!-- Info -->
            <div class="p-4">
              <h3 class="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2 text-sm leading-snug">
                {{ video.title }}
              </h3>
              <p class="text-xs text-gray-400 mt-2">Dr. Ahmed Mukhtar</p>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div *ngIf="filteredVideos().length === 0" class="text-center py-16 text-gray-400">
          <div class="text-5xl mb-4">🎬</div>
          <p class="font-medium">No videos found</p>
          <p class="text-sm mt-1">Try a different search or category</p>
        </div>
      </div>
    </div>

    <!-- Video Player Modal -->
    <div *ngIf="activeVideo"
         class="fixed inset-0 z-50 flex items-center justify-center p-4"
         style="background: rgba(0,0,0,0.88)"
         (click)="closePlayer()">
      <div class="w-full max-w-4xl" (click)="$event.stopPropagation()">

        <!-- Modal header -->
        <div class="flex items-start justify-between mb-3 gap-4">
          <div class="min-w-0">
            <span class="text-teal-400 text-xs font-medium uppercase tracking-wide">{{ activeVideo.category }}</span>
            <h3 class="text-white font-semibold text-lg leading-snug mt-0.5">{{ activeVideo.title }}</h3>
          </div>
          <button (click)="closePlayer()"
                  class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors flex-shrink-0">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Player -->
        <div class="rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video
            [src]="activeVideo.src"
            controls
            autoplay
            class="w-full aspect-video"
            (ended)="closePlayer()">
            Your browser does not support the video tag.
          </video>
        </div>

        <!-- Navigation between videos -->
        <div class="flex items-center justify-between mt-4">
          <button (click)="prevVideo()" [disabled]="currentIndex === 0"
                  class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Previous
          </button>
          <p class="text-white/40 text-xs">{{ currentIndex + 1 }} / {{ videos.length }}</p>
          <button (click)="nextVideo()" [disabled]="currentIndex === videos.length - 1"
                  class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            Next
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <p class="text-center text-white/30 text-xs mt-3">Click outside to close</p>
      </div>
    </div>
  `
})
export class VideosPageComponent {
  search = '';
  activeCategory = 'All';
  activeVideo: Video | null = null;
  currentIndex = 0;

  categories = ['All', 'Gut Health', 'Nutrition', 'Mental Health', 'About'];

  videos: Video[] = [
     {
      id: 1,
      title: 'Who I Am and What I Do',
      category: 'About',
      src: 'assets/videos/Who_I_am_and_what_I_do.mp4',
    },
    {
      id: 2,
      title: 'What Causes Gut-Brain Communication Disorders?',
      category: 'Gut Health',
      src: 'assets/videos/What_Causes_Gut_Brain_Communication_Disorders.mp4',
    },
    {
      id: 3,
      title: 'Are You Eating Too Much? Understanding Healthy Portions',
      category: 'Nutrition',
      src: 'assets/videos/are_You_Eating_Too_Much_Understanding_Healthy_Portions.mp4',
    },
    {
      id: 4,
      title: 'How Gut Health Affects Depression',
      category: 'Mental Health',
      src: 'assets/videos/How_Gut_Health_Affects_Depression.mp4',
    },
    {
      id: 5,
      title: 'The New Food Pyramid Explained: A Modern Guide to Nutrition',
      category: 'Nutrition',
      src: 'assets/videos/The_New_Food_Pyramid_Explained_A_Modern_Guide_to_Nutrition.mp4',
    },
    {
      id: 6,
      title: 'Effective Ways to Treat Depression Naturally and Medically',
      category: 'Mental Health',
      src: 'assets/videos/Effective_Ways_to_Treat_Depression_Naturally_and_Medically.mp4',
    },
   {
      id: 7,
      title: 'The Link Between Sugar and Stress: What You Need to Know',
      category: 'Nutrition',
      src: 'assets/videos/The_Link_Between_Sugar_and_Stress_What_You_Need_to_Know.mp4',
    },
    {
      id: 8,
      title: 'How to Fix the Gut-Brain Connection',
      category: 'Gut Health',
      src: 'assets/videos/How_to_Fix_the_Gut_Brain_Connection.mp4',
    },
  ];

  filteredVideos(): Video[] {
    return this.videos.filter(v =>
      (this.activeCategory === 'All' || v.category === this.activeCategory) &&
      (!this.search || v.title.toLowerCase().includes(this.search.toLowerCase()))
    );
  }

  openPlayer(video: Video): void {
    this.activeVideo = video;
    this.currentIndex = this.videos.findIndex(v => v.id === video.id);
    document.body.style.overflow = 'hidden';
  }

  closePlayer(): void {
    this.activeVideo = null;
    document.body.style.overflow = '';
  }

  prevVideo(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.activeVideo = this.videos[this.currentIndex];
    }
  }

  nextVideo(): void {
    if (this.currentIndex < this.videos.length - 1) {
      this.currentIndex++;
      this.activeVideo = this.videos[this.currentIndex];
    }
  }
}
