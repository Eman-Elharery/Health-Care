import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  text: string;
  from: 'patient' | 'doctor';
  time: string;
}

@Component({
  selector: 'app-patient-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-3xl h-full flex flex-col">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Chat with Doctor</h1>
        <p class="text-gray-500 text-sm mt-1">Secure messaging with your healthcare provider</p>
      </div>

      <!-- Doctor info bar -->
      <div class="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold">A</div>
        <div class="flex-1">
          <div class="font-semibold text-gray-900 text-sm">Dr. Ahmed Hassan</div>
          <div class="text-xs text-teal-500 flex items-center gap-1">
            <span class="w-2 h-2 bg-teal-500 rounded-full inline-block"></span> Online
          </div>
        </div>
        <div class="text-xs text-gray-400">Cardiology</div>
      </div>

      <!-- Messages -->
      <div #messagesContainer class="flex-1 bg-white rounded-2xl border border-gray-100 p-4 overflow-y-auto space-y-3 min-h-0 max-h-96">
        <div *ngFor="let msg of messages"
             class="flex"
             [ngClass]="msg.from === 'patient' ? 'justify-end' : 'justify-start'">
          <div class="max-w-xs">
            <div class="px-4 py-2.5 rounded-2xl text-sm"
                 [ngClass]="msg.from === 'patient'
                   ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-br-sm'
                   : 'bg-gray-100 text-gray-800 rounded-bl-sm'">
              {{ msg.text }}
            </div>
            <div class="text-xs text-gray-400 mt-1" [ngClass]="msg.from === 'patient' ? 'text-right' : 'text-left'">
              {{ msg.time }}
            </div>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="mt-4 flex gap-3">
        <input
          [(ngModel)]="newMessage"
          (keyup.enter)="sendMessage()"
          type="text"
          placeholder="Type a message..."
          class="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
        />
        <button (click)="sendMessage()"
                class="px-5 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
          Send
        </button>
      </div>
    </div>
  `
})
export class PatientChatComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private container!: ElementRef;
  newMessage = '';

  messages: Message[] = [
    { text: 'Hello! How can I help you today?', from: 'doctor', time: '10:00 AM' },
    { text: 'Hi Doctor, I have been experiencing chest pain for the past two days.', from: 'patient', time: '10:01 AM' },
    { text: 'I understand. Can you describe the pain? Is it sharp or dull? Does it radiate anywhere?', from: 'doctor', time: '10:02 AM' },
    { text: 'It\'s a dull ache, mostly on the left side. Sometimes it goes to my arm.', from: 'patient', time: '10:03 AM' },
    { text: 'That\'s important to address. I recommend you come in for an ECG as soon as possible. Can you come today?', from: 'doctor', time: '10:04 AM' },
  ];

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    } catch {}
  }

  sendMessage(): void {
    if (!this.newMessage.trim()) return;
    this.messages.push({
      text: this.newMessage,
      from: 'patient',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    this.newMessage = '';
    // Mock doctor auto-reply
    setTimeout(() => {
      this.messages.push({
        text: 'Thank you for the update. I\'ll review and get back to you shortly.',
        from: 'doctor',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1200);
  }
}
