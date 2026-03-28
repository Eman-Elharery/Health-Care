import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Plan {
  name: string;
  prices: { '1': number; '3': number; '6': number };
  features: string[];
  popular: boolean;
}

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-10 bg-gray-100">
      <div class="container mx-auto px-4">

        <!-- Header -->
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold text-gray-900 mb-3">Subscription Plans</h2>
          <p class="text-gray-400 text-base">
            Choose the plan that fits your healthcare needs. Upgrade or cancel anytime.
          </p>
        </div>

        <!-- Duration Toggle -->
        <div class="flex justify-center mb-14">
          <div class="flex bg-gray-200 rounded-2xl p-1 gap-1">
            <button *ngFor="let d of durations"
              (click)="activeDuration = d.value"
              class="px-8 py-2.5 rounded-xl text-sm font-medium transition-all"
              [ngClass]="activeDuration === d.value
                ? 'bg-[#42759d] text-white shadow'
                : 'text-gray-500 hover:text-gray-700'">
              {{ d.label }}
            </button>
          </div>
        </div>

        <!-- Plans -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-0 max-w-5xl mx-auto">

          <!-- Basic -->
          <div class="w-full md:w-1/3 bg-white rounded-3xl shadow-sm border border-gray-200 p-10 md:mr-[-1px] z-0">
            <h3 class="text-2xl font-bold text-center text-gray-900 mb-6">Basic</h3>
            <div class="flex items-end justify-center gap-1 mb-8">
              <span class="text-5xl font-extrabold text-gray-900">{{ getPrice(plans[0]) | number }}</span>
              <span class="text-gray-400 text-sm mb-2">EGP</span>
            </div>
            <ul class="space-y-4 mb-10">
              <li *ngFor="let f of plans[0].features" class="flex items-center gap-3">
                <svg class="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-600 text-sm">{{ f }}</span>
              </li>
            </ul>
            <a routerLink="/book-appointment"
               class="block w-full py-3.5 rounded-2xl text-center font-semibold text-[#42759d] border-2 border-[#42759d] hover:border-[#42759d] hover:bg-[#42759d] transition-all text-sm">
              Select Plan
            </a>
          </div>

          <!-- Pro (Popular) -->
          <div class="w-full md:w-1/3 relative z-10 -mt-6 md:mt-0">
            <!-- Badge -->
            <div class="flex justify-center mb-0">
              <div class="bg-[#42759d] text-white text-xs font-semibold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow -mb-4 relative z-10">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Most Popular
              </div>
            </div>
            <div class="bg-white rounded-3xl shadow-lg border-2 border-[#42759d] p-10 pt-10">
              <h3 class="text-2xl font-bold text-center text-gray-900 mb-6">Pro</h3>
              <div class="flex items-end justify-center gap-1 mb-8">
                <span class="text-5xl font-extrabold text-gray-900">{{ getPrice(plans[1]) | number }}</span>
                <span class="text-gray-400 text-sm mb-2">EGP</span>
              </div>
              <ul class="space-y-4 mb-10">
                <li *ngFor="let f of plans[1].features" class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-gray-600 text-sm">{{ f }}</span>
                </li>
              </ul>
              <a routerLink="/book-appointment"
                 class="block w-full py-3.5 rounded-2xl text-center font-semibold text-white transition-all text-sm"
                 style="background: linear-gradient(to right, #6b7fc4, #4db6ac)">
                Select Plan
              </a>
            </div>
          </div>

          <!-- VIP -->
          <div class="w-full md:w-1/3 bg-white rounded-3xl shadow-sm border border-gray-200 p-10 md:ml-[-1px] z-0">
            <h3 class="text-2xl font-bold text-center text-gray-900 mb-6">VIP</h3>
            <div class="flex items-end justify-center gap-1 mb-8">
              <span class="text-5xl font-extrabold text-gray-900">{{ getPrice(plans[2]) | number }}</span>
              <span class="text-gray-400 text-sm mb-2">EGP</span>
            </div>
            <ul class="space-y-4 mb-10">
              <li *ngFor="let f of plans[2].features" class="flex items-center gap-3">
                <svg class="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-gray-600 text-sm">{{ f }}</span>
              </li>
            </ul>
            <a routerLink="/book-appointment"
               class="block w-full py-3.5 rounded-2xl text-center font-semibold text-[#42759d] border-2 border-[#42759d] hover:border-[#42759d] hover:bg-indigo-50 transition-all text-sm">
              Select Plan
            </a>
          </div>

        </div>
      </div>
    </section>
  `
})
export class PricingSectionComponent {
  activeDuration: '1' | '3' | '6' = '1';

  durations = [
    { label: '1 Month',  value: '1' as const },
    { label: '3 Months', value: '3' as const },
    { label: '6 Months', value: '6' as const },
  ];

  plans: Plan[] = [
    {
      name: 'Basic',
      prices: { '1': 800, '3': 2100, '6': 3800 },
      features: [
        'Access to basic resources',
        'Email support',
        'Monthly health tips',
        'Community forum access',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      prices: { '1': 1000, '3': 2700, '6': 4800 },
      features: [
        'Everything in Basic',
        'Priority doctor chat',
        'Video consultations',
        'Personalized plans',
        '24/7 support',
      ],
      popular: true,
    },
    {
      name: 'VIP',
      prices: { '1': 1200, '3': 3200, '6': 5800 },
      features: [
        'Everything in Pro',
        'Dedicated health advisor',
        'Home visit scheduling',
        'Premium content library',
        'Family member access',
      ],
      popular: false,
    },
  ];

  getPrice(plan: Plan): number {
    return plan.prices[this.activeDuration];
  }
}