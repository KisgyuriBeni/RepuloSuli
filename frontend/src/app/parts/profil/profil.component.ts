import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: any = {};
  userCourses: any = [];
  selectedUserCourse:any={}
  airplanes:any

  isAdmin: boolean = false;
  isLoggedin: boolean = true;

  oszlopok = [
    { key: "user_name", text: "Felhasználó név", type: "text" },
    { key: "email", text: "Email cím", type: "text" },
    { key: "first_name", text: "Vezeték név", type: "text" },
    { key: "last_name", text: "Kereszt név", type: "text" },
    { key: "mothers_name", text: "Anyja neve", type: "text" },
    { key: "address", text: "Lakcím", type: "text" },
    { key: "phone_number", text: "Telefonszám", type: "text" }
  ];

  courses = [
    { key: "course_name", text: "Megnevezés", type: "text" },
    { key: "duration", text: "Időtartam", type: "text" },
    { key: "instructor", text: "Oktató", type: "text" },
    { key: "airplane_id", text: "Kiadott gép", type: "text" },
    { key: "course_fee", text: "Ár", type: "text" }
  ];

  constructor(private auth: AuthService, private router: Router, private base: BaseService) { }

  ngOnInit(): void {
    this.getOneUserById()
    this.getairplanes()
  }

  getOneUserById() {
    const userId = localStorage.getItem('id');
    this.base.getOneUser(userId).subscribe(
      (res) => {
        this.user = res;
        console.log(this.user)
        localStorage.setItem('admin', this.user.is_admin);
        this.isAdmin = this.user.is_admin === 1;
        
        if (this.user && this.user.courses) {
          this.userCourses = this.user.courses;
        } else {
          console.error('Nincsenek tanfolyamok a felhasználóhoz rendelve.');
        }
      },
      (error) => {
        console.error('Hiba történt a felhasználó adatok lekérése során:', error);
      }
    );
  }
  

  logout() {
    const token = localStorage.getItem('token');
    this.auth.logout(token);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('admin');
    this.isLoggedin = false;
    this.router.navigate(['/fooldal']);
  }

  getAirplaneNameById(airplaneId:any): string {
    if (!this.airplanes || this.airplanes.length === 0) {
      console.error("Nincsenek kurzusok vagy üres tömb.");
      return '';
    }
    const selectedAirplane = this.airplanes.find((plane:any) => plane.id === airplaneId)
    return selectedAirplane ? selectedAirplane.airplane_name:''
  }

  getairplanes() {
    this.base.getairplanes(this.airplanes).subscribe(
      (res) => {
        this.airplanes = res;
        console.log(this.airplanes);
      },
      (error) => {
        console.error('Hiba történt a repülőgépek lekérése során:', error);
      }
    );
  }
  dropCourse(courseId:any){
    this.base.detach(this.user.id, courseId).subscribe(
      (res)=>{
        console.log(res),
        this.getOneUserById();
      },
      (err)=>{
        console.error(err);
      }
    );
  }
  chooseOneCourse(course: any) {
    this.selectedUserCourse = course
    console.log(this.selectedUserCourse);
    this.dropCourse(course.id)
  }
}
