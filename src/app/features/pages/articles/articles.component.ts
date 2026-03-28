import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-10">
          <span class="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-3">Health Library</span>
          <h1 class="text-4xl font-bold text-gray-900">Medical Articles</h1>
          <p class="text-gray-500 mt-2">Expert-written health content you can trust</p>
        </div>

        <!-- Search & Filter -->
        <div class="flex flex-col md:flex-row gap-4 mb-8">
          <div class="flex-1 relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input [(ngModel)]="search" type="text" placeholder="Search articles..." class="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
          </div>
          <div class="flex gap-2 flex-wrap">
            <button
              *ngFor="let cat of categories"
              (click)="activeCategory = cat"
              class="px-4 py-2 rounded-xl text-sm font-medium transition-all border"
              [ngClass]="activeCategory === cat ? 'bg-teal-500 text-white border-teal-500' : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300'"
            >{{ cat }}</button>
          </div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article *ngFor="let article of filteredArticles()" class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
            <div class="h-44 bg-gradient-to-br" [ngClass]="article.gradient"></div>
            <div class="p-5">
              <span class="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-lg">{{ article.category }}</span>
              <h3 class="font-semibold text-gray-900 mt-2 mb-1 group-hover:text-teal-600 transition-colors">{{ article.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed line-clamp-2">{{ article.excerpt }}</p>
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

  articles = [
    { title: 'Understanding Heart Disease Risk Factors', excerpt: 'Learn about the key risk factors that contribute to heart disease and how to reduce your chances.', category: 'Cardiology', author: 'Dr. Ahmed Hassan', readTime: 5, gradient: 'from-red-100 to-pink-200' },
    { title: 'The Mediterranean Diet: A Complete Guide', excerpt: 'Discover how the Mediterranean diet can improve your health and reduce disease risk.', category: 'Nutrition', author: 'Dr. Sara Ali', readTime: 7, gradient: 'from-green-100 to-emerald-200' },
    { title: 'Managing Anxiety in Daily Life', excerpt: 'Practical strategies and techniques to manage anxiety and improve mental well-being.', category: 'Mental Health', author: 'Dr. Nadia Ibrahim', readTime: 6, gradient: 'from-purple-100 to-violet-200' },
    { title: 'Type 2 Diabetes: Prevention Strategies', excerpt: 'Evidence-based approaches to preventing and managing type 2 diabetes effectively.', category: 'Diabetes', author: 'Dr. Mohamed Khaled', readTime: 8, gradient: 'from-orange-100 to-amber-200' },
    { title: 'The Benefits of Walking 30 Minutes Daily', excerpt: 'Simple yet powerful: how a daily 30-minute walk can transform your overall health.', category: 'Fitness', author: 'Dr. Ahmed Hassan', readTime: 4, gradient: 'from-teal-100 to-cyan-200' },
    { title: 'High Blood Pressure: What You Need to Know', excerpt: 'Understanding hypertension, its causes, and effective management strategies.', category: 'Cardiology', author: 'Dr. Sara Ali', readTime: 6, gradient: 'from-blue-100 to-sky-200' },
  ];

  filteredArticles() {
    return this.articles.filter(a =>
      (this.activeCategory === 'All' || a.category === this.activeCategory) &&
      (!this.search || a.title.toLowerCase().includes(this.search.toLowerCase()))
    );
  }
}
