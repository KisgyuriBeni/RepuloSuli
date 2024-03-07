import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';



@Component({
  selector: 'app-bejel',
  templateUrl: './bejel.component.html',
  styleUrls: ['./bejel.component.css'],
})
export class BejelComponent{
user:any={ email:'', password:'' }
isSpinning:boolean = false;

constructor(private auth:AuthService, private router:Router, private base:BaseService){}

login(){
  this.isSpinning = true;
  this.auth.login(this.user).subscribe(
    (res) => {
      localStorage.setItem('id', res.data.id)
      localStorage.setItem('token', res.data.token)
      console.log(res)
      this.router.navigate(['/profil'])
      setTimeout(() => {
        this.isSpinning = false;
        // this.base.getOneUser(this.id)
      }, 1000);
    },
    (err) => console.error("Hiba!", err)
  );
}
 
}

	