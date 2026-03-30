import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { ArticlesSectionComponent } from '../../components/articles-section/articles-section.component';
import { VideosSectionComponent } from '../../components/videos-section/videos-section.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { PricingSectionComponent } from '../../components/pricing-section/pricing-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ServicesSectionComponent,
    ArticlesSectionComponent,
    VideosSectionComponent,
    FaqSectionComponent,
    CtaSectionComponent,
    PricingSectionComponent,
  ],
  template: `
    <main>
      <app-hero-section></app-hero-section>
      <app-services-section></app-services-section>
      <app-articles-section></app-articles-section>
      <app-videos-section></app-videos-section>
      <app-pricing-section></app-pricing-section>
      <!-- <app-faq-section></app-faq-section> -->
      <app-cta-section></app-cta-section>
    </main>
  `,
})
export class HomeComponent {}
