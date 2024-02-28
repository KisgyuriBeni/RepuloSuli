import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
userId(userId: any, token: any) {
  throw new Error('Method not implemented.');
}
authURL="http://localhost:8000/api/"
user:any={}
token: any = null 
userId: any  // Az azonosító inicializálása

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
  return this.http.post<any>(this.authURL + 'login', user).pipe(
    tap(res => {
      if (res.token && res.userId) { // Az azonosító beállítása, ha elérhető
        this.token = res.token;
        this.userId = res.userId;
      }
      this.router.navigate(['/profil']);
    })
  );
}

}
