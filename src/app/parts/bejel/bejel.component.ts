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
 
 constructor(private auth:AuthService, private router:Router){}

 login(){
  this.auth.login(this.user).subscribe(
    (res)=>{
      localStorage.setItem('token', res.token);
      console.log(res)
      this.router.navigate(['/profil'])
    },
    (err)=>console.error("Hiba!", err)
  )
 }
}

	