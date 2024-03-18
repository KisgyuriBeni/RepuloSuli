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
      }
    );
  }

  showUserDetails(user: any) {
    this.selectedUser = user
    console.log(this.selectedUser);
  }

  updateUser() {
    if (this.selectedUser) {
      this.base.updateUsers( this.selectedUser ).subscribe(
        (res) => {
          console.log('Felhasználó frissítve:', res);
        }, 
        (error) => {
          console.error('Hiba történt a felhasználó frissítésekor:', error);
        });
    } else {
      console.error('Nincs kiválasztott felhasználó vagy hiányzik az azonosító.');
    }
  }

  deleteUser() {
    if (this.selectedUser && this.selectedUser.id) {
      this.base.deleteUser(this.selectedUser.id).subscribe(
        (res) => {
          console.log('Felhasználó törölve:', res)
          this.users = this.users.filter((user: { id: any; }) => user.id !== this.selectedUser.id);
        }, 
        (err) => {
          console.error('Hiba történt a felhasználó törlésekor:', err)
        })
    } else {
      console.error('Nincs kiválasztott felhasználó vagy hiányzik az azonosító.')
    }
  }
  
}