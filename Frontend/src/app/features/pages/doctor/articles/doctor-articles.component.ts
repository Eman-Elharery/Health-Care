import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  featured: boolean;
  excerpt: string;
}

@Component({
  selector: 'app-doctor-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-5xl">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Manage Articles</h1>
          <p class="text-gray-500 text-sm mt-1">{{ articles.length }} articles published</p>
        </div>
        <button (click)="openDialog()"
          class="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-teal-100 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          New Article
        </button>
      </div>

      <!-- List -->
      <div class="space-y-3">
        <div *ngFor="let article of articles"
             class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl flex-shrink-0 bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-xl">
            📝
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="font-medium text-gray-900 truncate">{{ article.title }}</span>
              <span *ngIf="article.featured" class="px-2 py-0.5 bg-teal-50 text-teal-700 text-xs rounded-lg font-medium">Featured</span>
            </div>
            <div class="text-xs text-gray-400 mt-0.5">{{ article.category }} · {{ article.date }}</div>
          </div>
          <div class="flex gap-2 flex-shrink-0">
            <button (click)="editArticle(article)"
                    class="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            </button>
            <button (click)="deleteArticle(article.id)"
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
            <h2 class="font-semibold text-gray-900">{{ editingId ? 'Edit Article' : 'New Article' }}</h2>
            <button (click)="closeDialog()" class="p-1 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="p-6 space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input [(ngModel)]="form.title" type="text" placeholder="Article title..." class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select [(ngModel)]="form.category" class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
                <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
              <textarea [(ngModel)]="form.excerpt" rows="3" placeholder="Short description..." class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"></textarea>
            </div>
            <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" [(ngModel)]="form.featured" class="rounded text-teal-500" />
              Mark as Featured
            </label>
            <button (click)="saveArticle()"
                    class="w-full py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
              {{ editingId ? 'Update' : 'Publish' }} Article
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DoctorArticlesComponent {
  showDialog = false;
  editingId: number | null = null;
  nextId = 4;

  categories = ['Cardiology', 'Nutrition', 'Mental Health', 'Diabetes', 'Fitness', 'General'];

  form = { title: '', category: 'Cardiology', excerpt: '', featured: false };

  articles: Article[] = [
    { id: 1, title: 'Understanding Heart Disease Risk Factors', category: 'Cardiology', date: 'Mar 10, 2026', featured: true, excerpt: 'Learn about the key risk factors.' },
    { id: 2, title: 'The Mediterranean Diet: A Complete Guide', category: 'Nutrition', date: 'Mar 5, 2026', featured: false, excerpt: 'How diet can improve your health.' },
    { id: 3, title: 'Managing Anxiety in Daily Life', category: 'Mental Health', date: 'Feb 28, 2026', featured: false, excerpt: 'Practical strategies for anxiety.' },
  ];

  openDialog(): void {
    this.editingId = null;
    this.form = { title: '', category: 'Cardiology', excerpt: '', featured: false };
    this.showDialog = true;
  }

  editArticle(a: Article): void {
    this.editingId = a.id;
    this.form = { title: a.title, category: a.category, excerpt: a.excerpt, featured: a.featured };
    this.showDialog = true;
  }

  closeDialog(): void { this.showDialog = false; }

  saveArticle(): void {
    if (!this.form.title.trim()) return;
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    if (this.editingId) {
      const idx = this.articles.findIndex(a => a.id === this.editingId);
      if (idx > -1) this.articles[idx] = { ...this.articles[idx], ...this.form };
    } else {
      this.articles.unshift({ id: this.nextId++, ...this.form, date });
    }
    this.closeDialog();
  }

  deleteArticle(id: number): void {
    this.articles = this.articles.filter(a => a.id !== id);
  }
}
