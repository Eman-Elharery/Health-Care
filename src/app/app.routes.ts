import { RouterModule, Routes } from '@angular/router';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./features/pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'about', loadComponent: () => import('./features/pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./features/pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'articles', loadComponent: () => import('./features/pages/articles/articles.component').then(m => m.ArticlesPageComponent) },
  { path: 'videos', loadComponent: () => import('./features/pages/videos/videos.component').then(m => m.VideosPageComponent) },
  { path: 'book-appointment', loadComponent: () => import('./features/pages/book-appointment/book-appointment.component').then(m => m.BookAppointmentComponent) },
  { path: 'articles/:id', loadComponent: () => import('./features/pages/article-detail/article-detail').then(m => m.ArticleDetailComponent) },
  {
    path: 'patient',  
    component: PatientLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./features/pages/patient/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'appointments', loadComponent: () => import('./features/pages/patient/appointments/patient-appointments.component').then(m => m.PatientAppointmentsComponent) },
      { path: 'chat', loadComponent: () => import('./features/pages/patient/chat/patient-chat.component').then(m => m.PatientChatComponent) },
      { path: 'articles', loadComponent: () => import('./features/pages/patient/articles/patient-articles.component').then(m => m.PatientArticlesComponent) },
      { path: 'videos', loadComponent: () => import('./features/pages/patient/videos/patient-videos.component').then(m => m.PatientVideosComponent) },
      { path: 'profile', loadComponent: () => import('./features/pages/patient/profile/patient-profile.component').then(m => m.PatientProfileComponent) },
    ],
  },
  {
    path: 'doctor',
    component: DoctorLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./features/pages/doctor/dashboard/doctor-dashboard.component').then(m => m.DoctorDashboardComponent) },
      { path: 'appointments', loadComponent: () => import('./features/pages/doctor/appointments/doctor-appointments.component').then(m => m.DoctorAppointmentsComponent) },
      { path: 'patients', loadComponent: () => import('./features/pages/doctor/patients/doctor-patients.component').then(m => m.DoctorPatientsComponent) },
      { path: 'chat', loadComponent: () => import('./features/pages/doctor/chat/doctor-chat.component').then(m => m.DoctorChatComponent) },
      { path: 'articles', loadComponent: () => import('./features/pages/doctor/articles/doctor-articles.component').then(m => m.DoctorArticlesComponent) },
      { path: 'videos', loadComponent: () => import('./features/pages/doctor/videos/doctor-videos.component').then(m => m.DoctorVideosComponent) },
      { path: 'settings', loadComponent: () => import('./features/pages/doctor/settings/doctor-settings.component').then(m => m.DoctorSettingsComponent) },
    ],
  },
  { path: '**', loadComponent: () => import('./features/pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}