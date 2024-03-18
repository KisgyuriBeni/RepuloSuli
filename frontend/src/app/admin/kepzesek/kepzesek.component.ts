import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-kepzesek',
  templateUrl: './kepzesek.component.html',
  styleUrls: ['./kepzesek.component.css']
})
export class KepzesekComponent {
courses:any
oneCourse:any={}
newCourse: any = {}


oszlopok = [
  { key: "id", text: "Id", type: "plain" },
  { key: "course_name", text: "Képzés", type: "text" },
  { key: "airplane_id", text: "Kiadott gép", type: "text" },
  { key: "instructor", text: "Oktató", type: "text" },
  { key: "duration", text: "Időtartam", type: "text" },
  { key: "course_fee", text: "Ár", type: "text" },
];

constructor(private base:BaseService){
  this.getCourses()
}

getCourses(){
  this.base.getCourses(this.courses).subscribe(
    (res)=>{
      this.courses = res
      console.log(res)
    }
  )
}

getOneCourse(course:any){
  this.base.getOneCourse(this.oneCourse).subscribe(
    (res)=>{
      this.oneCourse = course
      console.log(this.oneCourse)
    }
  )
}

createCourses(){
 this.base.createCourse(this.newCourse).subscribe(
  (res)=>{
    console.log("Sikeresen felvett képzés!", res)
    console.log(this.newCourse)
  },
  (error)=>{
    console.error("Hiba a felvételkor!", error)
  }
 )
}
}
