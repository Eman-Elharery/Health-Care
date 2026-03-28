import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-5xl h-full flex gap-5" style="height: calc(100vh - 80px)">

      <!-- Sidebar: Patient list -->
      <div class="w-72 flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        <div class="p-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-900 text-sm">Messages</h2>
        </div>
        <div class="flex-1 overflow-y-auto">
          <div *ngFor="let conv of conversations"
               (click)="activeConv = conv.id"
               class="flex gap-3 p-4 cursor-pointer transition-colors border-b border-gray-50"
               [ngClass]="activeConv === conv.id ? 'bg-teal-50' : 'hover:bg-gray-50'">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-sm font-bold text-teal-700 flex-shrink-0">
              {{ conv.patient[0] }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <div class="font-medium text-gray-900 text-sm">{{ conv.patient }}</div>
                <div class="text-xs text-gray-400">{{ conv.time }}</div>
              </div>
              <div class="text-xs text-gray-500 truncate">{{ conv.lastMsg }}</div>
            </div>
            <div *ngIf="conv.unread > 0"
                 class="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {{ conv.unread }}
            </div>
          </div>
        </div>
      </div>

      <!-- Chat area -->
      <div class="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
        <div class="p-4 border-b border-gray-100 flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-sm font-bold text-teal-700">S</div>
          <div>
            <div class="font-semibold text-gray-900 text-sm">Sara Mohamed</div>
            <div class="text-xs text-teal-500">Online</div>
          </div>
        </div>

        <div class="flex-1 p-4 overflow-y-auto space-y-3">
          <div *ngFor="let msg of messages" class="flex" [ngClass]="msg.from === 'doctor' ? 'justify-end' : 'justify-start'">
            <div class="max-w-sm">
              <div class="px-4 py-2.5 rounded-2xl text-sm"
                   [ngClass]="msg.from === 'doctor' ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'">
                {{ msg.text }}
              </div>
              <div class="text-xs text-gray-400 mt-1" [ngClass]="msg.from === 'doctor' ? 'text-right' : ''">{{ msg.time }}</div>
            </div>
          </div>
        </div>

        <div class="p-4 border-t border-gray-100 flex gap-3">
          <input [(ngModel)]="newMsg" (keyup.enter)="send()" type="text" placeholder="Type a message..." class="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <button (click)="send()" class="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">Send</button>
        </div>
      </div>
    </div>
  `
})
export class DoctorChatComponent {
  activeConv = 1;
  newMsg = '';

  conversations = [
    { id: 1, patient: 'Sara Mohamed', lastMsg: 'It\'s a dull ache, mostly on...', time: '10:03', unread: 1 },
    { id: 2, patient: 'Ahmed Ali', lastMsg: 'When should I take the medication?', time: '9:45', unread: 0 },
    { id: 3, patient: 'Nour Hassan', lastMsg: 'Thank you Doctor!', time: 'Yesterday', unread: 0 },
  ];

  messages = [
    { text: 'Hello! How can I help you today?', from: 'doctor', time: '10:00 AM' },
    { text: 'Hi Doctor, I have been experiencing chest pain for the past two days.', from: 'patient', time: '10:01 AM' },
    { text: 'Can you describe the pain? Is it sharp or dull?', from: 'doctor', time: '10:02 AM' },
    { text: 'It\'s a dull ache, mostly on the left side. Sometimes goes to my arm.', from: 'patient', time: '10:03 AM' },
  ];

  send(): void {
    if (!this.newMsg.trim()) return;
    this.messages.push({ text: this.newMsg, from: 'doctor', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    this.newMsg = '';
  }
}
