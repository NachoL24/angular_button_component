import { Component } from '@angular/core';
import { StyleButtonComponent } from '../../style-button/style-button.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [StyleButtonComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
