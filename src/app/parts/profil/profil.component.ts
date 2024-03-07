import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';
import { BejelComponent } from '../bejel/bejel.component';
import { NgLocaleLocalization } from '@angular/common';

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
    let id = localStorage.getItem('id')
    this.base.getOneUser(id).subscribe(
      (res)=>{
        this.user = res
        console.log(res)
      }
    )
  }

  logout() {
    let token=localStorage.getItem('token');
    this.auth.logout(token)
    console.log("Sikeresen kijelentkezett!")
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    this.router.navigate(['/bejel'])
  }

}