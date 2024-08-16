import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-style-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-button.component.html',
  styleUrls: ['./style-button.component.scss']
})
export class StyleButtonComponent {
  @Input() color: string = 'red';
  @Input() font_color: string = 'white';
  @Input() shape: string = 'ellipse';
  @Input() label: string = 'Button';
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
