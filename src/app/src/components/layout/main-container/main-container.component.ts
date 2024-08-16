import { Component } from '@angular/core';
import { StyleButtonComponent } from '../../style-button/style-button.component';
import { SelectorsComponent } from '../../selectors/selectors.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [StyleButtonComponent, SelectorsComponent],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  shape = 'elliptical';

  handleShapeChange() {
    const selectElement = document.getElementById('buttonShape') as HTMLSelectElement;
    if (selectElement) {
      this.shape = selectElement.value;
    }
  }

  handleButtonClick(buttonLabel: string) {
    alert(`Has clickeado el ${buttonLabel}`);
  }
}