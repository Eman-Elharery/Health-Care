import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/components/footer/footer.component';
import { HeaderComponent } from './features/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HeaderComponent,
    FooterComponent,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HealthCare');
}
