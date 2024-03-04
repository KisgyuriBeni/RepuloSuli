import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-bejel',
  templateUrl: './bejel.component.html',
  styleUrls: ['./bejel.component.css'],
})
export class BejelComponent{
user:any={ email:'', password:'' }
isSpinning:boolean = false;


constructor(private auth:AuthService, private router:Router){}

 login(){
  this.isSpinning = true;
  this.auth.login(this.user).subscribe(
    (res)=>{
      localStorage.setItem('token', res.data.token)
      this.router.navigate(['/profil'])
      setTimeout(() => {
        this.isSpinning = false;
      }, 1000);
    },
    (err)=>console.error("Hiba!", err)
  )
 }
 
}

	