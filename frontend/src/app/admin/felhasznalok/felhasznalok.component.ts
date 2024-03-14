import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-felhasznalok',
  templateUrl: './felhasznalok.component.html',
  styleUrls: ['./felhasznalok.component.css']
})
export class FelhasznalokComponent {
  users: any;
  selectedUser:any={}
  oszlopok = [
    { key: "id", text: "Id", type: "plain" },
    { key: "user_name", text: "Felhasználónév", type: "text" },
    { key: "first_name", text: "Vezetéknév", type: "text" },
    { key: "last_name", text: "Keresztnév", type: "text" },
    { key: "mothers_name", text: "Anyja neve", type: "text" },
    { key: "email", text: "Emailcím", type: "text" },
    { key: "phone_number", text: "Telefonszám", type: "text" },
    { key: "address", text: "Lakcím", type: "text" },
    { key: "birth_day", text: "Születési dátum", type: "text" }
  ];

  constructor(private base: BaseService) {
    this.base.getUsers(this.users).subscribe(
      (res) => {
        this.users = res;
        console.log(res);
        console.log(this.users[0]);
      }
    );
  }

  showUserDetails(user: any) {
    this.selectedUser = user
    console.log(this.selectedUser);
  }
  
}