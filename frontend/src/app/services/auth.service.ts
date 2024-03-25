import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

authURL = "http://localhost:8000/api/"


constructor(private http:HttpClient){}

register(user:any): Observable<any>{
 return this.http.post<any>(`${this.authURL}register`, user)
}

login(user: any): Observable<any> {
  return this.http.post<any>(`${this.authURL}login`, user).pipe(
    catchError(error=>{
      return throwError(error.error)
    })
  )
}

logout(token:any): Observable<any> {
  const headers = new HttpHeaders(token)
  return this.http.post<any>(`${this.authURL}logout`, { headers });
}
}
