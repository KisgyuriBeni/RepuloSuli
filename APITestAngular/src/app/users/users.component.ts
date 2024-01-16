import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public getUsersValue: any;
  public postUsersValue: any;
  constructor(private http:HttpClient) {
    
  }
  ngOnInit(): void {
    this.getUsers();

  }
  public getUsers() {
    this.http.get('http://localhost:5000/users').subscribe((userData) => {
      console.log(userData);
      this.getUsersValue = userData;
    })
  }
}
