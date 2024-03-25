import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bejel',
  templateUrl: './bejel.component.html',
  styleUrls: ['./bejel.component.css'],
})
export class BejelComponent{
user:any={}

isSpinning:boolean = false
isLoggedin:boolean = false
invalidPassword:boolean = false
tooManyAttempt:boolean = false

constructor(private auth:AuthService, private router:Router){}

login() {
  this.isSpinning = true;

  this.auth.login(this.user).subscribe(
    (res) => {
      console.log(res);
      
      localStorage.setItem('id', res.data.id);
      localStorage.setItem('token', res.data.token);

      this.isLoggedin = true;
      this.router.navigate(['/fooldal']);
    },
    (err) => {
      this.isSpinning = false;
      console.error(err);

      if (err && err.errormessage && err.errormessage.includes('Hibás email vagy jelszó')) {
        this.invalidPassword = true;
      } else if (err && err.errormessage && err.errormessage.includes('Túl sok próbálkozás')) {
        this.tooManyAttempt = true;
      }
    }
  );
}

 
}

	