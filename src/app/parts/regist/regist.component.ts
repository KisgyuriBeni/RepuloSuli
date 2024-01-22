import { Component} from '@angular/core';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],

})
export class RegistComponent {
  isSpinning: boolean = false;

  startSpin() {
    this.isSpinning = !this.isSpinning;
  }
}
