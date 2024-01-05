import { Component } from '@angular/core';
import { NgbCalendar,NgbDateStruct, NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adatlap',
  templateUrl: './adatlap.component.html',
  styleUrls: ['./adatlap.component.css']
})
export class AdatlapComponent {

  data:any

  saveData(){
    window.location.reload()
  }

}
