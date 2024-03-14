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
oszlopok=[
  {key:"user_name", text:"Felhasználó név"},
  {key:"email", text:"Email cím"},
  {key:"first_name", text:"Vezeték név"},
  {key:"last_name", text:"Kereszt név"},
  {key:"mothers_name", text:"Anyja neve"},
  {key:"address", text:"Lakcím"},
  {key:"phone_number", text:"Telefonszám"}
]
isAdmin:boolean = false
isLoggedin:boolean=true

constructor(private auth:AuthService, private router:Router, private base:BaseService){
  this.getOneUserById()
}

  getOneUserById(){
    let id = localStorage.getItem('id')
    this.base.getOneUser(id).subscribe(
      (res)=>{
        this.user = res
        localStorage.setItem('admin', this.user.is_admin)
        this.isAdmin = this.user.is_admin === 1
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
    localStorage.removeItem('admin')
    this.isLoggedin = false;
    this.router.navigate(['/fooldal'])
  }

}