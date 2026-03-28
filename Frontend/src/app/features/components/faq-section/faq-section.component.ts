import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {
  faqs: FAQ[] = [
    {
      question: 'How do I book an appointment?',
      answer: "You can book an appointment through our website by clicking the 'Book Appointment' button, or by calling our office directly. Online booking is available 24/7 and you'll receive a confirmation email immediately.",
      isOpen: false,
    },
    {
      question: 'Do you offer telemedicine consultations?',
      answer: 'Yes! We offer secure video consultations for non-emergency cases. You can schedule a virtual appointment through your patient portal. This is ideal for follow-ups, minor concerns, and patients who prefer remote consultations.',
      isOpen: false,
    },
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Medicare, Blue Cross Blue Shield, Aetna, United Healthcare, and Cigna. Please contact our office to verify your specific coverage before your visit.',
      isOpen: false,
    },
    {
      question: 'How can I access my medical records?',
      answer: 'After creating an account, you can access your complete medical records through our secure patient portal. This includes visit summaries, test results, prescriptions, and doctor notes.',
      isOpen: false,
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: "Please bring your photo ID, insurance card, list of current medications, any relevant medical records, and a list of questions or concerns you'd like to discuss.",
      isOpen: false,
    },
    {
      question: 'Is there a way to communicate with the doctor outside of appointments?',
      answer: 'Yes, registered patients can use our secure messaging feature in the patient portal to communicate with Dr. Hassan. For urgent matters, our chat system provides timely responses during business hours.',
      isOpen: false,
    },
  ];

  toggle(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
