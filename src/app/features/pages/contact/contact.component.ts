import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div class="max-w-5xl mx-auto">

        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900">Get in Touch</h1>
          <p class="text-gray-500 mt-2">We're here to help — reach out anytime</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">

          <!-- Info Cards -->
          <div class="space-y-4">
            <div *ngFor="let info of contactInfo" class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-xl flex-shrink-0">
                {{ info.icon }}
              </div>
              <div>
                <div class="font-semibold text-gray-900 text-sm">{{ info.title }}</div>
                <div class="text-gray-500 text-sm mt-0.5">{{ info.value }}</div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input [(ngModel)]="form.firstName" type="text" placeholder="Ahmed" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input [(ngModel)]="form.lastName" type="text" placeholder="Hassan" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input [(ngModel)]="form.email" type="email" placeholder="you@example.com" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input [(ngModel)]="form.subject" type="text" placeholder="How can we help?" class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea [(ngModel)]="form.message" rows="4" placeholder="Tell us more..." class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"></textarea>
            </div>
            <button
              (click)="submit()"
              class="w-full py-3 bg-[#42759d] text-white rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-md shadow-teal-200"
            >Send Message</button>

            <div *ngIf="sent" class="p-3 bg-teal-50 text-teal-700 rounded-xl text-center text-sm">
              ✓ Message sent! We'll get back to you within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  form = { firstName: '', lastName: '', email: '', subject: '', message: '' };
  sent = false;

  contactInfo = [
    { icon: '📍', title: 'Address', value: '123 Medical Center, Cairo, Egypt' },
    { icon: '📞', title: 'Phone', value: '+20 100 000 0000' },
    { icon: '✉️', title: 'Email', value: 'support@medicare.eg' },
    { icon: '🕐', title: 'Hours', value: 'Mon–Fri, 9AM–6PM' },
  ];

  submit(): void {
    this.sent = true;
  }
}
