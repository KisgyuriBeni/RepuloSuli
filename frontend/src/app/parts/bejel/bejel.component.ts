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
isSpinning:boolean = false
isLoggedin:boolean=false

constructor(private auth:AuthService, private router:Router){}

login(){
  this.isSpinning = true;
  this.auth.login(this.user).subscribe(
    (res) => {
      localStorage.setItem('id', res.data.id)
      localStorage.setItem('token', res.data.token)
      this.isLoggedin = true
      console.log(res)
      this.router.navigate(['/fooldal'])
      setTimeout(() => {
        this.isSpinning = false
      }, 500)
    },
    (err) => {
      
      console.error("Bejelentkezési hiba!", err)
    }
  );
}
 
}

	