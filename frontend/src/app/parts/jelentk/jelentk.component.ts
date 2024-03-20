import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-jelentk',
  templateUrl: './jelentk.component.html',
  styleUrls: ['./jelentk.component.css']
})
export class JelentkComponent implements OnInit{
courses:any
selectedCourse:any={}
user_id:any
course_id:any

constructor(private base:BaseService){}

ngOnInit(): void {
    this.getCourses()
}

getCourses(){
  this.base.getCourses(this.courses).subscribe(
    (res)=>{
      this.courses=res
      console.log(this.courses)

    }
  )
}

sendApplication(course: any){
  this.selectedCourse = course
  console.log(this.selectedCourse)
  localStorage.setItem('course_id', this.selectedCourse.id)
  this.makeAttach()
}

makeAttach(){
  this.course_id = localStorage.getItem('course_id')
  this.user_id = localStorage.getItem('id')

  if (!this.course_id || !this.user_id) {
    console.error('Hiba: Az user_id vagy a course_id üres!')
    return
  }
  console.log('course_id:', this.course_id)
  console.log('user_id:', this.user_id)

  this.base.attachToCourse(this.course_id, this.user_id)
  }

}
