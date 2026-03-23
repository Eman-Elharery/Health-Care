import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavLink {
  href: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  currentPath = '/';

  navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/articles', label: 'Articles' },
    { href: '/videos', label: 'Videos' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentPath = this.router.url;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentPath = event.urlAfterRedirects;
        this.isOpen = false;
      });
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    this.isOpen = false;
  }

  isActive(href: string): boolean {
    return this.currentPath === href;
  }
}
