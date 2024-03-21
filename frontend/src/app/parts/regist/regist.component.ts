import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BejelComponent } from '../bejel/bejel.component';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],

})
export class RegistComponent {
newUser:any={}
user:any={}
isSpinning:boolean = false
isLoggedin:boolean = false

constructor(private auth:AuthService, private router:Router){}

registration(){
  this.isSpinning = true;
  this.auth.register(this.newUser).subscribe(
    (res) => {
      console.log("Sikeres regisztráció!", res)
      this.user = { email: this.newUser.email, password: this.newUser.password }
      this.loginAfterRegist(this.user)
      setTimeout(() => {
        this.isSpinning = false
      }, 500)
    },
    (err) => {
      console.log(err)
    });
  setTimeout(() => {
    this.isSpinning = false
  }, 500)
}
loginAfterRegist(user: any) {
  this.auth.login(user).subscribe(
    (res) => {
      localStorage.setItem('id', res.data.id);
      localStorage.setItem('token', res.data.token);
      this.isLoggedin = true
      this.router.navigateByUrl('/profile');
    },
    (err) => {
      console.error("Bejelentkezési hiba!", err);
    }
  );
}

}
