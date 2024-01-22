import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loggedInUser: BehaviorSubject<{ email: string, password: string, username: string } | null> = new BehaviorSubject<{ email: string, password: string, username: string } | null>(null);

  constructor() {}

  addUser(user: { email: string, password: string, username:string }): void {
    // Felhasználó hozzáadása a bejelentkezéshez elfogadott felhasználókhoz
    this.loggedInUser.next(user)
    console.log(user)
  }

  login(email: string, password: string): boolean {
    // Felhasználó ellenőrzése
    const user = this.loggedInUser.value;
    if (user && user.email === email && user.password === password) {
      this.isLoggedIn.next(true);
      return true;
    } else {
      this.isLoggedIn.next(false);
      return false;
    }
  }

  logout(): void {
    // Kijelentkezés
    this.isLoggedIn.next(false);
    this.loggedInUser.next(null);
  }

  isAuthenticated(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

  getCurrentLoggedInUser(): BehaviorSubject<{ email: string, password: string, username:string } | null> {
    return this.loggedInUser;
  }
}
