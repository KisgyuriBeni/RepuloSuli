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
user:any={}
course:any={}
userCourses:any={}

oszlopok=[
  {key:"user_name", text:"Felhasználó név", type:"text"},
  {key:"email", text:"Email cím", type:"text"},
  {key:"first_name", text:"Vezeték név", type:"text"},
  {key:"last_name", text:"Kereszt név", type:"text"},
  {key:"mothers_name", text:"Anyja neve", type:"text"},
  {key:"address", text:"Lakcím", type:"text"},
  {key:"phone_number", text:"Telefonszám", type:"text"}
]

isAdmin:boolean = false
isLoggedin:boolean=true

constructor(private auth:AuthService, private router:Router, private base:BaseService){
  this.getOneUserById()
}

getOneUserById(){
  let id = localStorage.getItem('id')
  this.base.getOneUser(id).subscribe(
    (res) => {
      this.user = res
      localStorage.setItem('admin', this.user.is_admin)
      this.isAdmin = this.user.is_admin === 1

      if (this.user && this.user.courses) {
        this.userCourses = this.user.courses
      } else {
        console.error('Nincsenek tanfolyamok a felhasználóhoz rendelve.')
      }
    },
    (error) => {
      console.error('Hiba történt a felhasználó adatok lekérése során:', error)
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