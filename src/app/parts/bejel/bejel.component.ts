import { Component } from '@angular/core';


@Component({
  selector: 'app-bejel',
  templateUrl: './bejel.component.html',
  styleUrls: ['./bejel.component.css'],
})
export class BejelComponent {
  
  isSpinning: boolean = false;

  startSpin() {
    this.isSpinning = !this.isSpinning;
  }
}

	