import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
users:any
courses:any

constructor(private base:BaseService){
  this.base.getUsers('users').subscribe({
    next:(res)=>{
      console.log(res),
      this.users=res
    },
    error:(e)=>{
      console.error(e)
    }
  })
  this.base.getCourses('courses').subscribe({
    next:(res)=>{
      console.log(res),
      this.courses=res
    },
    error:(e)=>{
      console.error(e)
    }
  })
}
  
}