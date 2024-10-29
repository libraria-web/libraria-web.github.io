import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sharedComponent/header/header.component';
import { FooterComponent } from './sharedComponent/footer/footer.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    ServicesComponent
   ]
})
export class AppComponent {
  title = 'tmsv01';
}
