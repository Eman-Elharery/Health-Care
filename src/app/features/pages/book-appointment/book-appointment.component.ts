import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div class="max-w-3xl mx-auto">

        <div class="text-center mb-10">
          <span class="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-3">Nutrition Assessment</span>
          <h1 class="text-3xl font-bold text-gray-900">Book Your Consultation</h1>
          <p class="text-gray-500 mt-2">Please fill in all sections to help Dr. Ahmed Mukhtar prepare your personalized plan</p>
        </div>

        <form (ngSubmit)="submit()" novalidate>
          <div class="space-y-6">

            <!-- 1. Personal Information -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                <h2 class="text-lg font-semibold text-gray-900">Personal Information</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Full Name <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.fullName" name="fullName" type="text" placeholder="Enter your full name"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.fullName ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.fullName" class="text-red-500 text-xs mt-1">Full name is required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Age <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.age" name="age" type="number" min="1" max="120" placeholder="e.g. 30"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.age ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.age" class="text-red-500 text-xs mt-1">Age is required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.phone" name="phone" type="tel" placeholder="+20 xxx xxx xxxx"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.phone" class="text-red-500 text-xs mt-1">Phone is required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Gender <span class="text-red-500">*</span></label>
                  <div class="flex gap-4">
                    <label *ngFor="let g of ['Male','Female']" class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" [(ngModel)]="form.gender" name="gender" [value]="g" class="w-4 h-4 text-teal-500" />
                      <span class="text-sm text-gray-700">{{ g }}</span>
                    </label>
                  </div>
                  <p *ngIf="submitted && !form.gender" class="text-red-500 text-xs mt-1">Gender is required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Marital Status <span class="text-red-500">*</span></label>
                  <div class="flex gap-4">
                    <label *ngFor="let m of ['Single','Married']" class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" [(ngModel)]="form.maritalStatus" name="maritalStatus" [value]="m" class="w-4 h-4 text-teal-500" />
                      <span class="text-sm text-gray-700">{{ m }}</span>
                    </label>
                  </div>
                  <p *ngIf="submitted && !form.maritalStatus" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Occupation <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.occupation" name="occupation" type="text" placeholder="e.g. Teacher, Engineer, Student"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.occupation ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.occupation" class="text-red-500 text-xs mt-1">Occupation is required</p>
                </div>
              </div>
            </div>

            <!-- 2. Goal -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                <h2 class="text-lg font-semibold text-gray-900">Goal <span class="text-red-500">*</span></h2>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label *ngFor="let goal of goalOptions"
                  class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all"
                  [ngClass]="form.goals.includes(goal) ? 'border-teal-400 bg-teal-50' : 'border-gray-200 hover:border-teal-200'">
                  <input type="checkbox" [checked]="form.goals.includes(goal)" (change)="toggleGoal(goal)" class="w-4 h-4 text-teal-500 rounded" />
                  <span class="text-sm text-gray-700">{{ goal }}</span>
                </label>
              </div>
              <p *ngIf="submitted && form.goals.length === 0" class="text-red-500 text-xs mt-2">Please select at least one goal</p>
            </div>

            <!-- 3. Body Measurements -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                <h2 class="text-lg font-semibold text-gray-900">Body Measurements</h2>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Current Weight <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input [(ngModel)]="form.currentWeight" name="currentWeight" type="number" min="1" placeholder="75"
                      class="w-full px-4 py-3 pr-12 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      [ngClass]="submitted && !form.currentWeight ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">kg</span>
                  </div>
                  <p *ngIf="submitted && !form.currentWeight" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Height <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input [(ngModel)]="form.height" name="height" type="number" min="1" placeholder="170"
                      class="w-full px-4 py-3 pr-12 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      [ngClass]="submitted && !form.height ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">cm</span>
                  </div>
                  <p *ngIf="submitted && !form.height" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Lowest Weight (Last 3 Years)</label>
                  <div class="relative">
                    <input [(ngModel)]="form.lowestWeight" name="lowestWeight" type="number" placeholder="65"
                      class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">kg</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Highest Weight (Last 3 Years)</label>
                  <div class="relative">
                    <input [(ngModel)]="form.highestWeight" name="highestWeight" type="number" placeholder="90"
                      class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">kg</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 4. Physical Examination -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                <h2 class="text-lg font-semibold text-gray-900">Physical Examination</h2>
              </div>
              <div class="space-y-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Hair Condition <span class="text-red-500">*</span></label>
                  <div class="flex gap-4">
                    <label *ngFor="let h of ['Healthy','Hair Loss']" class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" [(ngModel)]="form.hairCondition" name="hairCondition" [value]="h" class="w-4 h-4 text-teal-500" />
                      <span class="text-sm text-gray-700">{{ h }}</span>
                    </label>
                  </div>
                  <p *ngIf="submitted && !form.hairCondition" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Skin Condition</label>
                  <input [(ngModel)]="form.skinCondition" name="skinCondition" type="text" placeholder="e.g. Dry, Oily, Normal"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nails Condition</label>
                  <input [(ngModel)]="form.nailsCondition" name="nailsCondition" type="text" placeholder="e.g. Brittle, Strong"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
              </div>
            </div>

            <!-- 5. Menstrual Cycle (females only) -->
            <div *ngIf="form.gender === 'Female'" class="bg-white rounded-2xl border border-teal-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">5</div>
                <h2 class="text-lg font-semibold text-gray-900">Menstrual Cycle</h2>
              </div>
              <p class="text-xs text-gray-400 mb-5 ml-11">Select all that apply</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <label *ngFor="let opt of menstrualOptions"
                  class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all"
                  [ngClass]="form.menstrualCycle.includes(opt) ? 'border-teal-400 bg-teal-50' : 'border-gray-200 hover:border-teal-200'">
                  <input type="checkbox" [checked]="form.menstrualCycle.includes(opt)" (change)="toggleMenstrual(opt)" class="w-4 h-4 text-teal-500 rounded" />
                  <span class="text-sm text-gray-700">{{ opt }}</span>
                </label>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea [(ngModel)]="form.menstrualNotes" name="menstrualNotes" rows="2"
                  placeholder="Any additional notes about your cycle..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"></textarea>
              </div>
            </div>

            <!-- 6. Medical History -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{{ form.gender === 'Female' ? '6' : '5' }}</div>
                <h2 class="text-lg font-semibold text-gray-900">Medical History</h2>
              </div>
              <div class="space-y-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Chronic Diseases <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.chronicDiseases" name="chronicDiseases" type="text" placeholder="e.g. Diabetes, Hypertension, or None"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.chronicDiseases ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.chronicDiseases" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Previous Surgeries <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.surgeries" name="surgeries" type="text" placeholder="e.g. Appendectomy 2019, or None"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.surgeries ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.surgeries" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Current Medications <span class="text-red-500">*</span></label>
                  <textarea [(ngModel)]="form.medications" name="medications" rows="3"
                    placeholder="List all medications, or write None"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none transition"
                    [ngClass]="submitted && !form.medications ? 'border-red-400 bg-red-50' : 'border-gray-200'"></textarea>
                  <p *ngIf="submitted && !form.medications" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Family Medical History <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.familyHistory" name="familyHistory" type="text" placeholder="e.g. Diabetes on father's side, or None"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.familyHistory ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.familyHistory" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Previous Diets & Duration <span class="text-red-500">*</span></label>
                  <textarea [(ngModel)]="form.previousDiets" name="previousDiets" rows="3"
                    placeholder="Describe any diets you've followed and their duration, or None"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none transition"
                    [ngClass]="submitted && !form.previousDiets ? 'border-red-400 bg-red-50' : 'border-gray-200'"></textarea>
                  <p *ngIf="submitted && !form.previousDiets" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Food Allergies <span class="text-red-500">*</span></label>
                    <input [(ngModel)]="form.foodAllergies" name="foodAllergies" type="text" placeholder="e.g. Nuts, Dairy, or None"
                      class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      [ngClass]="submitted && !form.foodAllergies ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                    <p *ngIf="submitted && !form.foodAllergies" class="text-red-500 text-xs mt-1">Required</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Supplements <span class="text-red-500">*</span></label>
                    <input [(ngModel)]="form.supplements" name="supplements" type="text" placeholder="e.g. Vitamin D, or None"
                      class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      [ngClass]="submitted && !form.supplements ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                    <p *ngIf="submitted && !form.supplements" class="text-red-500 text-xs mt-1">Required</p>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Psychological Status <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.psychStatus" name="psychStatus" type="text" placeholder="e.g. Stressed, Stable, Good"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.psychStatus ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.psychStatus" class="text-red-500 text-xs mt-1">Required</p>
                </div>
              </div>
            </div>

            <!-- 7. Eating Habits -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{{ form.gender === 'Female' ? '7' : '6' }}</div>
                <h2 class="text-lg font-semibold text-gray-900">Eating Habits</h2>
              </div>
              <div class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Number of Meals per Day <span class="text-red-500">*</span></label>
                    <input [(ngModel)]="form.mealsPerDay" name="mealsPerDay" type="number" min="1" max="10" placeholder="e.g. 3"
                      class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      [ngClass]="submitted && !form.mealsPerDay ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                    <p *ngIf="submitted && !form.mealsPerDay" class="text-red-500 text-xs mt-1">Required</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Daily Water Intake <span class="text-red-500">*</span></label>
                    <div class="relative">
                      <input [(ngModel)]="form.waterIntake" name="waterIntake" type="number" min="0" step="0.5" placeholder="e.g. 2"
                        class="w-full px-4 py-3 pr-16 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                        [ngClass]="submitted && !form.waterIntake ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                      <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">liters</span>
                    </div>
                    <p *ngIf="submitted && !form.waterIntake" class="text-red-500 text-xs mt-1">Required</p>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Meal Timing <span class="text-red-500">*</span></label>
                  <div class="flex gap-4">
                    <label *ngFor="let t of ['Regular','Irregular']" class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" [(ngModel)]="form.mealTiming" name="mealTiming" [value]="t" class="w-4 h-4 text-teal-500" />
                      <span class="text-sm text-gray-700">{{ t }}</span>
                    </label>
                  </div>
                  <p *ngIf="submitted && !form.mealTiming" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Eating Out Frequency <span class="text-red-500">*</span></label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <label *ngFor="let opt of eatingOutOptions"
                      class="flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all"
                      [ngClass]="form.eatingOut === opt ? 'border-teal-400 bg-teal-50' : 'border-gray-200 hover:border-teal-200'">
                      <input type="radio" [(ngModel)]="form.eatingOut" name="eatingOut" [value]="opt" class="w-4 h-4 text-teal-500" />
                      <span class="text-sm text-gray-700">{{ opt }}</span>
                    </label>
                  </div>
                  <p *ngIf="submitted && !form.eatingOut" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Soft Drinks, Energy Drinks & Caffeine <span class="text-red-500">*</span></label>
                  <input [(ngModel)]="form.drinks" name="drinks" type="text"
                    placeholder="e.g. 2 cups of coffee/day, or None"
                    class="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                    [ngClass]="submitted && !form.drinks ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                  <p *ngIf="submitted && !form.drinks" class="text-red-500 text-xs mt-1">Required</p>
                </div>
              </div>
            </div>

            <!-- 8. Physical Activity -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{{ form.gender === 'Female' ? '8' : '7' }}</div>
                <h2 class="text-lg font-semibold text-gray-900">Physical Activity</h2>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Daily Activity Level <span class="text-red-500">*</span></label>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label *ngFor="let opt of activityOptions"
                    class="flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all"
                    [ngClass]="form.activityLevel === opt.value ? 'border-teal-400 bg-teal-50' : 'border-gray-200 hover:border-teal-200'">
                    <input type="radio" [(ngModel)]="form.activityLevel" name="activityLevel" [value]="opt.value" class="w-4 h-4 text-teal-500" />
                    <div>
                      <div class="text-xl">{{ opt.icon }}</div>
                      <div class="text-sm font-medium text-gray-700 mt-0.5">{{ opt.value }}</div>
                    </div>
                  </label>
                </div>
                <p *ngIf="submitted && !form.activityLevel" class="text-red-500 text-xs mt-1">Required</p>
              </div>
            </div>

            <!-- 9. Sleep -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{{ form.gender === 'Female' ? '9' : '8' }}</div>
                <h2 class="text-lg font-semibold text-gray-900">Sleep</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Sleep Pattern <span class="text-red-500">*</span></label>
                  <div class="flex gap-4">
                    <label *ngFor="let s of ['Regular','Irregular']" class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" [(ngModel)]="form.sleepPattern" name="sleepPattern" [value]="s" class="w-4 h-4 text-teal-500" />
                      <span class="text-sm text-gray-700">{{ s }}</span>
                    </label>
                  </div>
                  <p *ngIf="submitted && !form.sleepPattern" class="text-red-500 text-xs mt-1">Required</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Sleep Duration <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input [(ngModel)]="form.sleepHours" name="sleepHours" type="number" min="1" max="24" placeholder="e.g. 7"
                      class="w-full px-4 py-3 pr-16 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      [ngClass]="submitted && !form.sleepHours ? 'border-red-400 bg-red-50' : 'border-gray-200'" />
                    <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">hours</span>
                  </div>
                  <p *ngIf="submitted && !form.sleepHours" class="text-red-500 text-xs mt-1">Required</p>
                </div>
              </div>
            </div>

            <!-- Submit -->
            <div>
              <button type="submit" (click)="submit()" [disabled]="sending"
                class="w-full py-4 bg-gradient-to-r from-teal-500 to-[#42759d] text-white rounded-2xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-teal-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                <svg *ngIf="sending" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                {{ sending ? 'Sending...' : 'Submit Assessment' }}
              </button>
              <p class="text-center text-xs text-gray-400 mt-3">
                <span class="text-red-400">*</span> Required fields
              </p>
            </div>

            <!-- Success -->
            <div *ngIf="showSuccess" class="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center">
              <div class="text-4xl mb-3">✅</div>
              <h3 class="font-semibold text-teal-800 text-lg">Assessment Submitted Successfully!</h3>
              <p class="text-teal-600 text-sm mt-1">Dr. Ahmed Mukhtar will review your assessment and contact you shortly.</p>
            </div>

            <!-- Send Error -->
            <div *ngIf="errorMsg" class="bg-red-50 border border-red-200 rounded-2xl p-4 flex gap-3 items-start">
              <span class="text-red-500 text-lg flex-shrink-0">⚠️</span>
              <p class="text-red-700 font-medium text-sm">Failed to send. Please try again or contact us directly.</p>
            </div>

            <!-- Validation Error -->
            <div *ngIf="submitted && hasErrors() && !sending" class="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex gap-3 items-start">
              <span class="text-orange-500 text-lg flex-shrink-0">⚠️</span>
              <div>
                <p class="text-orange-700 font-medium text-sm">Please complete all required fields</p>
                <p class="text-orange-500 text-xs mt-0.5">Scroll up to find the missing fields marked in red</p>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  `
})
export class BookAppointmentComponent {
  submitted   = false;
  showSuccess = false;
  sending     = false;
  errorMsg    = false;

  private SERVICE_ID  = 'service_2bzhwo9';
  private TEMPLATE_ID = 'template_jekqlsj';

  form = this.emptyForm();

  private emptyForm() {
    return {
      fullName: '', age: null as number | null, gender: '', maritalStatus: '',
      phone: '', occupation: '',
      goals: [] as string[],
      currentWeight: null as number | null, height: null as number | null,
      lowestWeight: null as number | null, highestWeight: null as number | null,
      hairCondition: '', skinCondition: '', nailsCondition: '',
      menstrualCycle: [] as string[], menstrualNotes: '',
      chronicDiseases: '', surgeries: '', medications: '', familyHistory: '',
      previousDiets: '', foodAllergies: '', supplements: '', psychStatus: '',
      mealsPerDay: null as number | null, mealTiming: '', eatingOut: '',
      drinks: '', waterIntake: null as number | null,
      activityLevel: '',
      sleepPattern: '', sleepHours: null as number | null,
    };
  }

  goalOptions      = ['Weight Loss','Weight Gain','Improve General Health','Increase Muscle Mass','Blood Sugar Regulation','Blood Pressure Regulation'];
  menstrualOptions = ['Regular','Irregular','Pain During Period','No Pain'];
  eatingOutOptions = ['Never','Once or twice per week','Once per month','Mostly eating out'];
  activityOptions  = [{ value: 'Walking', icon: '🚶' },{ value: 'Gym', icon: '🏋️' },{ value: 'No physical activity', icon: '🛋️' }];

  toggleGoal(goal: string): void {
    const i = this.form.goals.indexOf(goal);
    i > -1 ? this.form.goals.splice(i, 1) : this.form.goals.push(goal);
  }

  toggleMenstrual(opt: string): void {
    const i = this.form.menstrualCycle.indexOf(opt);
    i > -1 ? this.form.menstrualCycle.splice(i, 1) : this.form.menstrualCycle.push(opt);
  }

  hasErrors(): boolean {
    const f = this.form;
    return !f.fullName || !f.age || !f.gender || !f.maritalStatus || !f.phone || !f.occupation
      || f.goals.length === 0 || !f.currentWeight || !f.height || !f.hairCondition
      || !f.chronicDiseases || !f.surgeries || !f.medications || !f.familyHistory
      || !f.previousDiets || !f.foodAllergies || !f.supplements || !f.psychStatus
      || !f.mealsPerDay || !f.mealTiming || !f.eatingOut || !f.drinks || !f.waterIntake
      || !f.activityLevel || !f.sleepPattern || !f.sleepHours;
  }

  submit(): void {
    this.submitted = true;
    if (this.hasErrors()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    this.sending  = true;
    this.errorMsg = false;
    const f = this.form;

    const p = (window as any).emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        name:             f.fullName,
        age:              f.age,
        gender:           f.gender,
        marital_status:   f.maritalStatus,
        phone:            f.phone,
        occupation:       f.occupation,
        goals:            f.goals.join(', '),
        current_weight:   f.currentWeight,
        height:           f.height,
        lowest_weight:    f.lowestWeight  || 'Not provided',
        highest_weight:   f.highestWeight || 'Not provided',
        hair_condition:   f.hairCondition,
        skin_condition:   f.skinCondition  || 'Not provided',
        nails_condition:  f.nailsCondition || 'Not provided',
        menstrual_cycle:  f.menstrualCycle.length ? f.menstrualCycle.join(', ') : 'N/A',
        menstrual_notes:  f.menstrualNotes || 'N/A',
        chronic_diseases: f.chronicDiseases,
        surgeries:        f.surgeries,
        medications:      f.medications,
        family_history:   f.familyHistory,
        previous_diets:   f.previousDiets,
        food_allergies:   f.foodAllergies,
        supplements:      f.supplements,
        psych_status:     f.psychStatus,
        meals_per_day:    f.mealsPerDay,
        meal_timing:      f.mealTiming,
        eating_out:       f.eatingOut,
        drinks:           f.drinks,
        water_intake:     f.waterIntake,
        activity_level:   f.activityLevel,
        sleep_pattern:    f.sleepPattern,
        sleep_hours:      f.sleepHours,
      }
    );

    p.then(
      () => {
        console.log('EmailJS success');
        this.showSuccess = true;
        this.sending     = false;
        this.submitted   = false;
        this.form        = this.emptyForm();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      },
      (err: any) => {
        console.error('EmailJS error:', err);
        this.errorMsg = true;
        this.sending  = false;
      }
    );
  }
}