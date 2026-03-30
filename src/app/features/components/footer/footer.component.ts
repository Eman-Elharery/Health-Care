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
    { label: 'Home', routerLink: '/' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Medical Articles', routerLink: '/articles' },
    { label: 'Video Library', routerLink: '/videos' },
    { label: 'Book Appointment', routerLink: '/book-appointment' },
    { label: 'Contact Us', routerLink: '/contact' },
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
