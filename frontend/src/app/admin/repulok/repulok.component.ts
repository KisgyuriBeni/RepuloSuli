import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-repulok',
  templateUrl: './repulok.component.html',
  styleUrls: ['./repulok.component.css']
})
export class RepulokComponent implements OnInit{
airplanes:any
selectedAirplane:any={}
newAirplane:any={}

oszlopok = [
  { key: "id", text: "Id", type: "plain" },
  { key: "airplane_name", text: "Megnevezés", type: "text" },
  { key: "propulsion", text: "Meghajtás", type: "text" }
]

constructor(private base:BaseService){}

ngOnInit(): void {
    this.getairplanes()
}

getairplanes(){
  return this.base.getairplanes(this.airplanes).subscribe(
    (res)=>{
      this.airplanes = res
      console.log(res)
    }
  )
}
showDetails(airplane: any) {
  this.selectedAirplane = airplane
  console.log(this.selectedAirplane);
}
createAirplane(){
  this.base.createAirplane(this.newAirplane).subscribe(
    (res)=>{
      console.log("Sikeres felvétel!", res)
      this.getairplanes()
    },
    (err)=>{
      console.error('Hiba történt a ' ,err)
    }
  )
}
updateUser() {
  if (this.selectedAirplane) {
    this.base.updateAirplane( this.selectedAirplane ).subscribe(
      (res) => {
        console.log('Repülő frissítve:', res);
      }, 
      (error) => {
        console.error('Hiba történt a repülő frissítésekor:', error);
      });
  } else {
    console.error('Nincs kiválasztott repülő vagy hiányzik az azonosító.');
  }
}

deleteUser() {
  if (this.selectedAirplane && this.selectedAirplane.id) {
    this.base.deleteAirplane(this.selectedAirplane.id).subscribe(
      (res) => {
        console.log('Repülő törölve:', res)
        this.airplanes = this.airplanes.filter((airplane: { id: any; }) => airplane.id !== this.selectedAirplane.id);
      }, 
      (err) => {
        console.error('Hiba történt a repülő törlésekor:', err)
      })
  } else {
    console.error('Nincs kiválasztott repülő vagy hiányzik az azonosító.')
  }
}
}
