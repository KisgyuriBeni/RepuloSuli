import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-kepzesek',
  templateUrl: './kepzesek.component.html',
  styleUrls: ['./kepzesek.component.css']
})
export class KepzesekComponent implements OnInit{
courses:any
newCoruse:any={}
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
    return '';
  }
  const selectedAirplane = this.airplanes.find((plane: any) => plane.id === airplaneId);
  return selectedAirplane ? selectedAirplane.airplane_name : '';
}

getairplanes(){
  this.base.getairplanes(this.airplanes).subscribe(
    (res)=>{
      this.airplanes = res
      console.log(this.airplanes)
    }
  )
}
}

