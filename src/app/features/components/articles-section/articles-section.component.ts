import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-articles-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './articles-section.component.html',
  styleUrls: ['./articles-section.component.scss']
})
export class ArticlesSectionComponent {
  articles: Article[] = [
    {
      id: 1,
      title: '10 Essential Tips for Maintaining Heart Health',
      excerpt: 'Learn simple lifestyle changes that can significantly reduce your risk of heart disease and improve cardiovascular health.',
      category: 'Cardiology',
      readTime: '5 min read',
      date: 'Jan 28, 2025',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Understanding Anxiety: Signs, Symptoms & Coping Strategies',
      excerpt: 'A comprehensive guide to recognizing anxiety symptoms and effective techniques to manage stress in your daily life.',
      category: 'Mental Health',
      readTime: '8 min read',
      date: 'Jan 25, 2025',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'The Mediterranean Diet: A Path to Better Health',
      excerpt: 'Discover the science-backed benefits of the Mediterranean diet and how to incorporate it into your lifestyle.',
      category: 'Nutrition',
      readTime: '6 min read',
      date: 'Jan 22, 2025',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    },
  ];
}
