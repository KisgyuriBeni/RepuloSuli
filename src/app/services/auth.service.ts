import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

authURL="http://localhost:8000/api/"

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

login(user: any): Observable<any> {
  return this.http.post<any>(`${this.authURL}login`, user)
}

logout(token:any): Observable<any> {
  const headers = new HttpHeaders(token)
  return this.http.post<any>(`${this.authURL}logout`, { headers });
}
}
