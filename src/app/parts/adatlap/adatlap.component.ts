import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-adatlap',
  templateUrl: './adatlap.component.html',
  styleUrls: ['./adatlap.component.css']
})
export class AdatlapComponent implements OnInit {
  data: any = {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    mothers_name: '',
    birth_day: '',
    address:{
      city:'',
      street:'',
      number:''
    },
    phone_number: ''
  };

  constructor(private base: BaseService) {}

  ngOnInit() {
    const id = localStorage.getItem('id');
    this.data.id = id;
  }

  addUser() {
    const addressString = `${this.data.address.city}` +` `+ `${this.data.address.street}` +` `+ `${this.data.address.number}`;
    this.data.address = addressString;
    this.base.addUserData(this.data).subscribe(
      (res) => {
        console.log("Adatok sikeresen felvéve: ", res);
      },
      (error) => {
        console.error('Hibás adatbevitel: ', error);
      }
    );
  }
}