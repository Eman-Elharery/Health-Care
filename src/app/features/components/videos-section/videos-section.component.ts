import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Video {
  id: number;
  title: string;
  duration: string;
  views: string;
  category: string;
  thumbnail: string;
}

@Component({
  selector: 'app-videos-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './videos-section.component.html',
  styleUrls: ['./videos-section.component.scss']
})
export class VideosSectionComponent {
  videos: Video[] = [
    {
      id: 1,
      title: 'Morning Stretches for Better Posture',
      duration: '12:34',
      views: '15.2K',
      category: 'Exercise',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=340&fit=crop',
    },
    {
      id: 2,
      title: 'Understanding Blood Pressure Readings',
      duration: '8:45',
      views: '23.1K',
      category: 'Education',
      thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=340&fit=crop',
    },
    {
      id: 3,
      title: '5-Minute Stress Relief Breathing Exercises',
      duration: '5:20',
      views: '45.8K',
      category: 'Mental Health',
      thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=340&fit=crop',
    },
    {
      id: 4,
      title: 'Healthy Meal Prep Ideas for Busy Professionals',
      duration: '15:42',
      views: '18.9K',
      category: 'Nutrition',
      thumbnail: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=340&fit=crop',
    },
  ];
}
