import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
baseURL="http://localhost:8000/api/"

constructor(private http:HttpClient, private auth:AuthService){}

getUsers(target:any){
  return this.http.get(this.baseURL+target)
}
getAirplanes(target:any){
  return this.http.get(this.baseURL+target)
}
getCourses(target:any){
  return this.http.get(this.baseURL+target)
}

updateOneUser(body:any){
  return this.http.post(this.baseURL+'userupdate/'+body.id,body)
}
deleteOneUser(id:number){
  return this.http.delete(this.baseURL+'userdelete/'+id)
}



  
}
