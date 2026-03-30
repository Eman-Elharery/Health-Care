import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readTime: number;
  gradient: string;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div class="max-w-6xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-10">
          <span class="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-3">
            Health Library
          </span>
          <h1 class="text-4xl font-bold text-gray-900">Medical Articles</h1>
          <p class="text-gray-500 mt-2">Expert-written health content you can trust</p>
        </div>

        <!-- Search & Filter -->
        <div class="flex flex-col md:flex-row gap-4 mb-8">
          <div class="flex-1 relative">
            <input [(ngModel)]="search" type="text"
                   placeholder="Search articles..."
                   class="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
          </div>

          <div class="flex gap-2 flex-wrap">
            <button
              *ngFor="let cat of categories"
              (click)="activeCategory = cat"
              class="px-4 py-2 rounded-xl text-sm font-medium transition-all border"
              [ngClass]="activeCategory === cat
                ? 'bg-teal-500 text-white border-teal-500'
                : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300'">
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            *ngFor="let article of filteredArticles()"
            [routerLink]="['/articles', article.id]"
            class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
          >
            <img [src]="article.image" class="w-full h-44 object-cover" />

            <div class="p-5">
              <span class="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-lg">
                {{ article.category }}
              </span>

              <h3 class="font-semibold text-gray-900 mt-2 mb-1 group-hover:text-teal-600 transition-colors">
                {{ article.title }}
              </h3>

              <p class="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {{ article.excerpt }}
              </p>

              <div class="flex items-center gap-2 mt-4 text-xs text-gray-400">
                <span>{{ article.author }}</span>
                <span>·</span>
                <span>{{ article.readTime }} min read</span>
              </div>
            </div>
          </article>
        </div>

      </div>
    </div>
  `
})
export class ArticlesPageComponent {

  search = '';
  activeCategory = 'All';

  categories = ['All', 'Cardiology', 'Nutrition', 'Mental Health', 'Diabetes', 'Fitness'];

  articles: Article[] = [
    {
      id: 1,
      title: 'Understanding Heart Disease Risk Factors',
      excerpt: 'Learn about the key risk factors that contribute to heart disease.',
      content: 'Full content for heart disease article...',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
      category: 'Cardiology',
      author: 'Dr. Ahmed Hassan',
      readTime: 5,
      gradient: 'from-red-100 to-pink-200'
    },
    {
      id: 2,
      title: 'The Mediterranean Diet: A Complete Guide',
      excerpt: 'Discover how the Mediterranean diet improves health.',
      content: 'Full content for Mediterranean diet...',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800',
      category: 'Nutrition',
      author: 'Dr. Sara Ali',
      readTime: 7,
      gradient: 'from-green-100 to-emerald-200'
    },
    {
      id: 3,
      title: 'Managing Anxiety in Daily Life',
      excerpt: 'Strategies to manage anxiety effectively.',
      content: 'Full content about anxiety...',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
      category: 'Mental Health',
      author: 'Dr. Nadia Ibrahim',
      readTime: 6,
      gradient: 'from-purple-100 to-violet-200'
    },
    {
      id: 4,
      title: 'Type 2 Diabetes: Prevention Strategies',
      excerpt: 'Prevent and manage type 2 diabetes.',
      content: 'Full diabetes prevention content...',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      category: 'Diabetes',
      author: 'Dr. Mohamed Khaled',
      readTime: 8,
      gradient: 'from-orange-100 to-amber-200'
    },
    {
      id: 5,
      title: 'The Benefits of Walking 30 Minutes Daily',
      excerpt: 'Simple daily habits that improve health.',
      content: 'Full walking benefits article...',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      category: 'Fitness',
      author: 'Dr. Ahmed Hassan',
      readTime: 4,
      gradient: 'from-teal-100 to-cyan-200'
    },
    {
      id: 6,
      title: 'High Blood Pressure: What You Need to Know',
      excerpt: 'Understanding hypertension and control methods.',
      content: 'Full hypertension article...',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
      category: 'Cardiology',
      author: 'Dr. Sara Ali',
      readTime: 6,
      gradient: 'from-blue-100 to-sky-200'
    }
  ];

  filteredArticles() {
    return this.articles.filter(a =>
      (this.activeCategory === 'All' || a.category === this.activeCategory) &&
      (!this.search || a.title.toLowerCase().includes(this.search.toLowerCase()))
    );
  }
}