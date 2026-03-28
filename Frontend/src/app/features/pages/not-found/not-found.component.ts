import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-4">
      <div class="text-center">
        <div class="text-8xl font-bold text-teal-200 mb-4">404</div>
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Page not found</h1>
        <p class="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
        <a routerLink="/"
           class="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-md shadow-teal-200">
          Back to Home
        </a>
      </div>
    </div>
  `
})
export class NotFoundComponent {}
