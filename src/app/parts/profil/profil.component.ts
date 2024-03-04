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
    let token=localStorage.getItem('token');
    this.auth.logout(token)
        console.log("Sikeresen kijelentkezett!")
        localStorage.removeItem('token')
        this.router.navigate(['/bejel'])
  }

}