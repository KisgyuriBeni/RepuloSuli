import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  becsukva=true

  nyit(){
    this.becsukva = !this.becsukva
  }

}
