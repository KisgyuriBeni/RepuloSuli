import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-bejel',
  templateUrl: './bejel.component.html',
  styleUrls: ['./bejel.component.css'],
})
export class BejelComponent{
  user: any = { email: '', password: '' }
  constructor(private auth: AuthService, private router:Router) { }

  login() {
    this.auth.login(this.user).subscribe({
      next: (res: any) => {
        console.log("Login successful:", res)
        this.auth.token = res.token
        this.router.navigate(['/profil'])
      },
      error: (err: any) => {
        console.error("Login error:", err)
       
      }
    })
  }
}

	