import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
baseURL="http://localhost:8000/api/"

constructor(private http:HttpClient, private auth:AuthService){}


// admin
getUsers(users:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
  return this.http.get(this.baseURL+'users', {headers})
}
updateUsers(data:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
  return this.http.post(this.baseURL+'userupdate', data, {headers})
}
deleteUser(id: number): Observable<any> {
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` })
  return this.http.delete(`${this.baseURL}userdelete`, { headers, body: { id } })
}

// admincourses
getCourses(data:any){
  return this.http.get(this.baseURL+'courses', data)
}
getOneCourse(id:any){
  return this.http.get(this.baseURL+'onecourse/'+id)
}
createCourse(data:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
  return this.http.post(this.baseURL+'coursecreate', data, {headers})
}
updateCourse(data:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` })
  return this.http.post(this.baseURL+'courseupdate', data, {headers})
}
deleteCourse(id:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` })
  return this.http.delete(this.baseURL+'coursedelete', {headers, body:{id}})
}

// admincoureses
getairplanes(data:any){
  return this.http.get(this.baseURL+'airplanes', data)
}
getoneairplane(id:any){
  return this.http.get(this.baseURL+'oneairplane/'+id)
}
createAirplane(data:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
  return this.http.post(this.baseURL+'airplanecreate', data, {headers})
}
updateAirplane(data:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
  return this.http.post(this.baseURL+'airplaneupdate', data, {headers})
}
deleteAirplane(id: number): Observable<any> {
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` })
  return this.http.delete(`${this.baseURL}airplanedelete`, { headers, body: { id } })
}

// profile
getOneUser(id:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
  return this.http.get(this.baseURL+'oneuser/'+id, {headers})
}
addUserData(data:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
 return this.http.post(this.baseURL+'userupdate' , data, {headers})
}
attachToCourse(user_id:any, course_id:any){
  let token = localStorage.getItem('token')
  const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
  this.http.post(this.baseURL+'attach', { user_id, course_id }, { headers} ).subscribe(
    response => {
      console.log(response)
    },
    error => {
      console.error(error)
    }
  )
}

  
}
