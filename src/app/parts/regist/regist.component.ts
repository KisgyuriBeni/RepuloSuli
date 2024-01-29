import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],

})
export class RegistComponent {
  email: string = '';
  password: string = '';
  username: string = ''
  isSpinning: boolean = false;

  constructor(private authService: AuthService) {}

  register() {
    this.isSpinning = true;

    // Felhasználó hozzáadása
    this.authService.addUser({ email: this.email, password: this.password, username:this.username })
    console.log('Regisztráció sikeres', this.username);

    // Az isSpinning leállítása példa céljából 3 másodperc után
    setTimeout(() => {
      this.isSpinning = false;
    }, 1000);
  }
}
