import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';
import { BejelComponent } from '../bejel/bejel.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
user:any
constructor(private auth:AuthService, private router:Router, private base:BaseService){
this.getOneUserById()

}
getOneUserById(){
  let userId = this.auth.getUserId();
  if (userId) {
    this.base.getOneUser(userId).subscribe(
      (res) => {
        this.user = res
        console.log(res)
      }
    );
  } else {
    console.error('Az userId értéke nem elérhető.');
  }
}

  logout() {
    let token=localStorage.getItem('token');
    this.auth.logout(token)
    console.log("Sikeresen kijelentkezett!")
    localStorage.removeItem('token')
    this.router.navigate(['/bejel'])
  }

}