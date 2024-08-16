import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectors',
  standalone: true,
  imports: [],
  templateUrl: './selectors.component.html',
  styleUrl: './selectors.component.scss'
})
export class SelectorsComponent {
  selectedShape: string = 'elliptical';
}