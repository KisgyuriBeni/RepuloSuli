import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-kepzesek',
  templateUrl: './kepzesek.component.html',
  styleUrls: ['./kepzesek.component.css']
})
export class KepzesekComponent implements OnInit{
courses:any={}
newCoruse:any={}
selectedCourse:any={}
airplanes:any

oszlopok = [
  { key: "id", text: "Id", type: "plain" },
  { key: "course_name", text: "Képzés", type: "text" },
  { key: "instructor", text: "Oktató", type: "text" },
  { key: "duration", text: "Időtartam", type: "text" },
  { key: "course_fee", text: "Ár", type: "text" },
  { key: "airplane_id", text: "Kiadott gép", type: "text" },
];

constructor(private base:BaseService){}

ngOnInit(): void {
  this.getCourses()
  this.getairplanes()
}

getCourses(){
  this.base.getCourses(this.courses).subscribe(
    (res)=>{
      this.courses=res
    }
  )
}
createCoruses(){
  const selectedAirplane = this.airplanes.find((plane: any) => plane.airplane_name === this.newCoruse.airplane_name)
  if (selectedAirplane) {
    this.newCoruse.airplane_id = selectedAirplane.id
  }
  this.base.createCourse(this.newCoruse).subscribe(
    (res) => {
      console.log("Sikeresen felvett tanfolyam!",res)
      this.getCourses()
    },
    (err) => console.error("Hiba lépett fel frissítéskor!", err)
  );
}

getAirplaneNameById(airplaneId: number): string {
  if (!this.airplanes || this.airplanes.length === 0) {
    console.error("Repülőgép adatok nincsenek betöltve vagy üres tömb.");
    return ''
  }
  const selectedAirplane = this.airplanes.find((plane: any) => plane.id === airplaneId);
  return selectedAirplane ? selectedAirplane.airplane_name : ''
}

getairplanes(){
  this.base.getairplanes(this.airplanes).subscribe(
    (res)=>{
      this.airplanes = res
      console.log(this.airplanes)
    }
  )
}

showCoursesDetails(course: any) {
  this.selectedCourse = course
  console.log(this.selectedCourse);
}

updateCourse(){
  this.base.updateCourse(this.selectedCourse).subscribe(
    (res)=>
    {
      console.log("Sikeres frissítés!",res),
      this.getCourses()
    },
    (error)=>console.error("Hiba lépett fel a frissítés során!",error)
  )
}
deleteCourse(){
  if (this.selectedCourse && this.selectedCourse.id) {
    this.base.deleteCourse(this.selectedCourse.id).subscribe(
      (res) => {
        console.log('Képzés törölve:', res)
        this.courses = this.courses.filter((course: { id: any; }) => course.id !== this.selectedCourse.id);
      }, 
      (err) => {
        console.error('Hiba történt a képzés törlésekor:', err)
      })
  } else {
    console.error('Nincs kiválasztott képzés vagy hiányzik az azonosító.')
  }
}
}

