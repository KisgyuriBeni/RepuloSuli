import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.css']
})
export class FooldalComponent implements DoCheck{

  isLoggedin: boolean = false;

  ngDoCheck(): void {
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
        this.isLoggedin = true; 
    } 
    else {
      this.isLoggedin = false;
    }
  }
}
