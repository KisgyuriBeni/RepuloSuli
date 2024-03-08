import { Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'RepuloSuli';
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
