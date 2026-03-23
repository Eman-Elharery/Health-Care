import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-5xl">
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">My Patients</h1>
          <p class="text-gray-500 text-sm mt-1">{{ patients.length }} total patients</p>
        </div>
        <div class="relative">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input [(ngModel)]="search" type="text" placeholder="Search patients..." class="pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 w-56" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div *ngFor="let patient of filteredPatients()"
             class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start hover:shadow-md transition-shadow cursor-pointer">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-lg font-bold text-teal-700 flex-shrink-0">
            {{ patient.name[0] }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <div class="font-semibold text-gray-900">{{ patient.name }}</div>
              <span class="px-2 py-0.5 rounded-full text-xs font-medium"
                [ngClass]="patient.status === 'Active' ? 'bg-teal-50 text-teal-700' : 'bg-gray-100 text-gray-600'">
                {{ patient.status }}
              </span>
            </div>
            <div class="text-sm text-gray-500">{{ patient.age }} yrs · {{ patient.gender }}</div>
            <div class="flex gap-3 mt-2 text-xs text-gray-400">
              <span class="flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Last: {{ patient.lastVisit }}
              </span>
              <span>·</span>
              <span>{{ patient.condition }}</span>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="filteredPatients().length === 0" class="text-center py-12 text-gray-400">
        <div class="text-4xl mb-3">👥</div>
        <div>No patients found</div>
      </div>
    </div>
  `
})
export class DoctorPatientsComponent {
  search = '';

  patients = [
    { name: 'Sara Mohamed', age: 30, gender: 'Female', condition: 'Hypertension', lastVisit: 'Mar 10', status: 'Active' },
    { name: 'Ahmed Ali', age: 45, gender: 'Male', condition: 'Heart Arrhythmia', lastVisit: 'Mar 8', status: 'Active' },
    { name: 'Nour Hassan', age: 28, gender: 'Female', condition: 'Palpitations', lastVisit: 'Feb 28', status: 'Active' },
    { name: 'Omar Khaled', age: 55, gender: 'Male', condition: 'High BP', lastVisit: 'Mar 1', status: 'Active' },
    { name: 'Layla Ibrahim', age: 38, gender: 'Female', condition: 'Chest Pain', lastVisit: 'Feb 15', status: 'Inactive' },
    { name: 'Karim Nasser', age: 62, gender: 'Male', condition: 'Post-surgery follow-up', lastVisit: 'Jan 20', status: 'Inactive' },
  ];

  filteredPatients() {
    return this.patients.filter(p => !this.search || p.name.toLowerCase().includes(this.search.toLowerCase()));
  }
}
