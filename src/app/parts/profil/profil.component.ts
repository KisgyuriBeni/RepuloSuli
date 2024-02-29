import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  constructor(private auth:AuthService, private router:Router){}

  logout() {
    this.auth.logout().subscribe(
      (res) => {
        console.log(res)
        localStorage.removeItem('token')
        this.router.navigate(['/bejel']);
      },
      err => {
        console.error('Hiba történt a kijelentkezés során:', err);
      }
    );
  }

}