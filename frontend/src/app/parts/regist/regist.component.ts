import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],

})
export class RegistComponent {
newUser:any={}
isSpinning:boolean = false

constructor(private auth:AuthService, private router:Router){}

registration(){
  this.isSpinning=true
  
  this.auth.register(this.newUser)

  setTimeout(() => {
    this.isSpinning = false;
  }, 500);
}
}
