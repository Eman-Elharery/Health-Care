import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-articles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 max-w-5xl">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Health Articles</h1>
        <p class="text-gray-500 text-sm mt-1">Curated health content from our doctors</p>
      </div>

      <!-- Saved Banner -->
      <div class="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-5 border border-teal-100 mb-8 flex items-center gap-4">
        <div class="text-3xl">📚</div>
        <div>
          <div class="font-semibold text-gray-900">You have {{ saved.length }} saved articles</div>
          <div class="text-sm text-gray-500">Continue reading where you left off</div>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div *ngFor="let article of articles" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
          <div class="h-36 bg-gradient-to-br" [ngClass]="article.gradient"></div>
          <div class="p-5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-lg">{{ article.category }}</span>
              <button (click)="toggleSave(article.id)"
                      class="text-gray-300 hover:text-teal-500 transition-colors"
                      [ngClass]="saved.includes(article.id) ? 'text-teal-500' : ''">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2H5z"/>
                </svg>
              </button>
            </div>
            <h3 class="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{{ article.title }}</h3>
            <p class="text-gray-500 text-sm mt-1 line-clamp-2">{{ article.excerpt }}</p>
            <div class="flex items-center gap-2 mt-3 text-xs text-gray-400">
              <span>{{ article.author }}</span><span>·</span><span>{{ article.readTime }} min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PatientArticlesComponent {
  saved: number[] = [1];

  toggleSave(id: number) {
    if (this.saved.includes(id)) {
      this.saved = this.saved.filter(s => s !== id);
    } else {
      this.saved.push(id);
    }
  }

  articles = [
    { id: 1, title: 'Understanding Heart Disease Risk Factors', excerpt: 'Learn about key risk factors that contribute to heart disease.', category: 'Cardiology', author: 'Dr. Ahmed Hassan', readTime: 5, gradient: 'from-red-100 to-pink-200' },
    { id: 2, title: 'The Mediterranean Diet Guide', excerpt: 'How the Mediterranean diet can improve your health.', category: 'Nutrition', author: 'Dr. Sara Ali', readTime: 7, gradient: 'from-green-100 to-emerald-200' },
    { id: 3, title: 'Managing Anxiety in Daily Life', excerpt: 'Practical strategies to manage anxiety and improve well-being.', category: 'Mental Health', author: 'Dr. Nadia Ibrahim', readTime: 6, gradient: 'from-purple-100 to-violet-200' },
    { id: 4, title: 'Type 2 Diabetes: Prevention Strategies', excerpt: 'Evidence-based approaches to preventing type 2 diabetes.', category: 'Diabetes', author: 'Dr. Mohamed Khaled', readTime: 8, gradient: 'from-orange-100 to-amber-200' },
  ];
}
