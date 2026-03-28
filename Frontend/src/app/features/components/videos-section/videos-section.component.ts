import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Video {
  id: number;
  title: string;
  duration: string;
  views: string;
  category: string;
  src: string;
}

@Component({
  selector: 'app-videos-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">

        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span class="text-teal-600 font-medium text-sm tracking-wider uppercase mb-4 block">
              Video Library
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
              Health Tips &amp; Tutorials
            </h2>
          </div>
          <a routerLink="/videos"
             class="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:border-teal-300 hover:text-teal-600 transition-all whitespace-nowrap">
            Browse All Videos
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        <!-- Videos Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let video of videos"
               (click)="openPlayer(video)"
               class="group cursor-pointer">
            <div class="relative rounded-2xl overflow-hidden mb-4 bg-gray-900 aspect-video">
              <!-- Video preview -->
              <video
                [src]="video.src"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                preload="metadata"
                [muted]="true">
              </video>
              <!-- Overlay -->
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div class="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg class="w-6 h-6 text-teal-600 fill-teal-600 ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <!-- Duration -->
              <div class="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                {{ video.duration }}
              </div>
              <!-- Category -->
              <div class="absolute top-3 left-3">
                <span class="bg-teal-600/90 text-white px-2 py-1 rounded text-xs font-medium">
                  {{ video.category }}
                </span>
              </div>
            </div>
            <h3 class="font-medium text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2">
              {{ video.title }}
            </h3>
            <p class="text-sm text-gray-400 mt-1">{{ video.views }} views</p>
          </div>
        </div>
      </div>

      <!-- Video Player Modal -->
      <div *ngIf="activeVideo"
           class="fixed inset-0 z-50 flex items-center justify-center p-4"
           style="background: rgba(0,0,0,0.85)"
           (click)="closePlayer()">
        <div class="w-full max-w-4xl" (click)="$event.stopPropagation()">
          <!-- Modal header -->
          <div class="flex items-center justify-between mb-3">
            <div>
              <span class="text-teal-400 text-xs font-medium">{{ activeVideo.category }}</span>
              <h3 class="text-white font-semibold text-lg leading-tight">{{ activeVideo.title }}</h3>
            </div>
            <button (click)="closePlayer()"
                    class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0 ml-4">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <!-- Video player -->
          <div class="rounded-2xl overflow-hidden bg-black shadow-2xl">
            <video
              #videoPlayer
              [src]="activeVideo.src"
              controls
              autoplay
              class="w-full aspect-video"
              (ended)="closePlayer()">
              Your browser does not support the video tag.
            </video>
          </div>
          <!-- Close hint -->
          <p class="text-center text-white/40 text-xs mt-3">Click outside to close</p>
        </div>
      </div>
    </section>
  `
})
export class VideosSectionComponent {
  activeVideo: Video | null = null;

  videos: Video[] = [
     {
      id: 1,
      title: 'Who I Am and What I Do',
      duration: '',
      views: '',
      category: 'About',
      src: 'assets/videos/Who_I_am_and_what_I_do.mp4',
    },
    {
      id: 2,
      title: 'What Causes Gut-Brain Communication Disorders?',
      duration: '',
      views: '',
      category: 'Gut Health',
      src: 'assets/videos/What_Causes_Gut_Brain_Communication_Disorders.mp4',
    },
    {
      id: 3,
      title: 'The Link Between Sugar and Stress: What You Need to Know',
      duration: '',
      views: '',
      category: 'Nutrition',
      src: 'assets/videos/The_Link_Between_Sugar_and_Stress_What_You_Need_to_Know.mp4',
    },
    {
      id: 4,
      title: 'Are You Eating Too Much? Understanding Healthy Portions',
      duration: '',
      views: '',
      category: 'Nutrition',
      src: 'assets/videos/are_You_Eating_Too_Much_Understanding_Healthy_Portions.mp4',
    },
   
  ];

  openPlayer(video: Video): void {
    this.activeVideo = video;
    document.body.style.overflow = 'hidden';
  }

  closePlayer(): void {
    this.activeVideo = null;
    document.body.style.overflow = '';
  }
}
