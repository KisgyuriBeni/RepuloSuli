import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL="http://localhost:8000/api/"
user:any={}

constructor(private http:HttpClient, private router:Router){}

register(user:any){
  this.http.post(this.authURL + 'register', user,).subscribe({
    next:(res)=>{
      console.log("Küldés sikeres!", res),
      this.router.navigate(['/verify'])
    },
    error:(err)=>{
      console.error("Regisztráció sikeretelen! Próbálja újra",err)
    }
  })
}
}
