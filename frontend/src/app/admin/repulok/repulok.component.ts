import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-repulok',
  templateUrl: './repulok.component.html',
  styleUrls: ['./repulok.component.css']
})
export class RepulokComponent {
airplanes:any
newAirplane:any={}

oszlopok = [
  { key: "id", text: "Id", type: "plain" },
  { key: "airplane_name", text: "Megnevezés", type: "text" },
  { key: "propulsion", text: "Meghajtás", type: "text" }
]

constructor(private base:BaseService){
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
createAirplane(){
  this.base.createAirplane(this.newAirplane).subscribe(
    (res)=>{
      console.log("Sikeres felvétel!", res)
    }
  )
}
}
