import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-bejel',
  templateUrl: './bejel.component.html',
  styleUrls: ['./bejel.component.css'],
})
export class BejelComponent {
  email: string = '';
  password: string = '';
  loggedInUserEmail: string = '';
  isAuthenticated: boolean = false;
  private authSubscription: Subscription;
  isSpinning: boolean = false;

  constructor(private authService: AuthService) {
    this.authSubscription = this.authService.isAuthenticated().subscribe((value) => {
      this.isAuthenticated = value;
      if (this.isAuthenticated) {
        // Ha be van jelentkezve, lekérjük a bejelentkezett felhasználó adatait
        const loggedInUser = this.authService.getCurrentLoggedInUser().value;
        if (loggedInUser) {
          this.loggedInUserEmail = loggedInUser.email;
        }
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  login() {
    this.isSpinning = true;

    // Simuláció: bejelentkezés
    setTimeout(() => {
      if (this.authService.login(this.email, this.password)) {
        // Bejelentkezett felhasználó nevének kiíratása a konzolba
        console.log('Bejelentkezett felhasználó:', this.loggedInUserEmail);

        // Mezők kiürítése
        this.email = '';
        this.password = '';
        
        // isSpinning leállítása 3 másodperc után
        setTimeout(() => {
          this.isSpinning = false;
        }, 1000);
      } else {
        // Bejelentkezés sikertelen, isSpinning leállítása azonnal
        this.isSpinning = false;
      }
    }, 1000);
  }

  logout() {
    this.authService.logout();
  }
}

	