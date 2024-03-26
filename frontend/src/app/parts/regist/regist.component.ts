import { Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

constructor(private auth:AuthService, private router:Router, private snackbar:MatSnackBar){}

openSnackBar(message: string, action: string) {
  this.snackbar.open(message, action, {
    duration: 3000,
  });
}
openErrorSnackbar(message:any, action: any){
  this.snackbar.open(message, action, {
    duration: 3000
  } )
}

registration() {
  this.isSpinning = true

  this.auth.register(this.newUser).subscribe(
    (res) => {
      console.log(res)
      if (res.data && res.data.email && res.data.email.includes('The email has already been taken.')) {
        this.emailExists = true
        this.isSpinning = false
<<<<<<< HEAD
      } 
        this.openSnackBar('Sikeres regisztráció!', 'Bezár')
        this.user = { email: this.newUser.email, password: this.newUser.password }
        setTimeout(() => {
          if (!this.newUser.user_name || !this.newUser.email || !this.newUser.password || !this.newUser.password_confirmation) {
            this.emptyFields = true
            this.isSpinning = false
          } else if (this.newUser.password !== this.newUser.password_confirmation) {
            this.invalidPassword = true
            this.isSpinning = false
          } else {
            if (!this.emailExists) {
              this.loginAfterRegist(this.user)
            }
            this.isSpinning = false
          }
        }, 500)
      },
    (err) => {
      console.error(err)
=======
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
>>>>>>> dd8d9c48204be9af37ddbc62b7d16a30d15152c8
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
      this.openSnackBar('Sikeres belépés!', 'Bezár')
    },
    (err) => {
      console.error("Bejelentkezési hiba!", err)
    }
  )
}




}