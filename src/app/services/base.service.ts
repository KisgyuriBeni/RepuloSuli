import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
baseURL="http://localhost:8000/api/"

constructor(private http:HttpClient){}

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
