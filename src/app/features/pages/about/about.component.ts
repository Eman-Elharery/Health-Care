import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20">
      <!-- Hero -->
      <section class="bg-gradient-to-br from-teal-50 to-blue-50 py-20 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-4">About MediCare</span>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Healthcare You Can Trust</h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            MediCare connects patients with top-rated doctors for seamless, high-quality healthcare experiences — from consultation to recovery.
          </p>
        </div>
      </section>

      <!-- Stats -->
      <section class="py-16 px-4 bg-white">
        <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div *ngFor="let stat of stats" class="text-center">
            <div class="text-3xl font-bold text-teal-600">{{ stat.value }}</div>
            <div class="text-sm text-gray-500 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </section>

      <!-- Mission -->
      <section class="py-16 px-4 bg-gray-50">
        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              We believe everyone deserves access to exceptional healthcare. MediCare bridges the gap between patients and qualified medical professionals through intuitive technology.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Whether you need a quick consultation, ongoing treatment, or specialist care — MediCare makes it simple, fast, and secure.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div *ngFor="let val of values" class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div class="text-2xl mb-2">{{ val.icon }}</div>
              <div class="font-semibold text-gray-900 text-sm">{{ val.title }}</div>
              <div class="text-gray-500 text-xs mt-1">{{ val.desc }}</div>
            </div>
          </div>
        </div>
      </section>

      

      <!-- CTA -->
      <section class="py-16 px-4 bg-gradient-to-br from-teal-500 to-blue-600 text-white text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p class="text-teal-100 mb-8">Book your first appointment in minutes</p>
        <a routerLink="/book-appointment"
           class="inline-block px-8 py-3 bg-white text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-colors shadow-lg">
          Book Appointment
        </a>
      </section>
    </div>
  `
})
export class AboutComponent {
  stats = [
    { value: '500+', label: 'Doctors' },
    { value: '50K+', label: 'Patients' },
    { value: '98%', label: 'Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  values = [
    { icon: '🏥', title: 'Quality Care', desc: 'Certified medical professionals' },
    { icon: '🔒', title: 'Private & Secure', desc: 'HIPAA-compliant platform' },
    { icon: '⚡', title: 'Fast Access', desc: 'Same-day appointments' },
    { icon: '💙', title: 'Patient First', desc: 'Compassionate approach' },
  ];

  team = [
    { emoji: '👨‍⚕️', name: 'Dr. Ahmed Hassan', role: 'Chief Medical Officer' },
    { emoji: '👩‍💼', name: 'Sara Mohamed', role: 'CEO & Co-founder' },
    { emoji: '👨‍💻', name: 'Khaled Omar', role: 'CTO' },
    { emoji: '👩‍⚕️', name: 'Dr. Nadia Ali', role: 'Head of Cardiology' },
  ];
}
