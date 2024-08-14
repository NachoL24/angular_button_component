import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleButtonComponent } from './src/components/style-button/style-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StyleButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_button_component';
}
