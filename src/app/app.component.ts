import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from "./src/components/layout/main-container/main-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_button_component';
}
