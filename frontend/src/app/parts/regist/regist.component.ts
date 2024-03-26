import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

emailExists:boolean = false
emptyFields:boolean = false
invalidPassword: boolean = false

constructor(private auth:AuthService, private router:Router){}

registration() {
  this.isSpinning = true;

  this.auth.register(this.newUser).subscribe(
    (res) => {
      console.log(res)
      this.user = { email: this.newUser.email, password: this.newUser.password }
      
      if (res.data && res.data.email && res.data.email.includes('The email has already been taken.')) {
        this.emailExists = true
        this.isSpinning = false
      } else{
      }
      
      setTimeout(() => {
        if (!this.newUser.user_name || !this.newUser.email || !this.newUser.password || !this.newUser.password_confirmation) {
          this.emptyFields = true
        } else if (this.newUser.password !== this.newUser.password_confirmation) {
          this.invalidPassword = true
        } else if (!this.emailExists && !this.invalidPassword && !this.emptyFields && this.user) {
          this.loginAfterRegist(this.user)
        }
        this.isSpinning = false
      }, 500)
    },
    (err) => {
      console.log(err)
      this.isSpinning = false
    }
  );
}



loginAfterRegist(user: any) {
  this.auth.login(user).subscribe(
    (res) => {
      localStorage.setItem('id', res.data.id)
      localStorage.setItem('token', res.data.token)
      this.isLoggedin = true
      this.router.navigateByUrl('/profile')
    },
    (err) => {
      console.error("Bejelentkezési hiba!", err)
    }
  )
}
}