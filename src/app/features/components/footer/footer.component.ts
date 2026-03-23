import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  quickLinks = [
    'About Us', 'Our Services', 'Medical Articles',
    'Video Library', 'Book Appointment', 'Patient Portal'
  ];

  services = [
    'General Consultation', 'Cardiology', 'Mental Health',
    'Nutrition Counseling', 'Preventive Care', 'Chronic Disease Management'
  ];

  socialLinks = [
    { icon: 'facebook', label: 'Facebook' },
    { icon: 'twitter', label: 'Twitter' },
    { icon: 'instagram', label: 'Instagram' },
    { icon: 'linkedin', label: 'LinkedIn' },
  ];
}
