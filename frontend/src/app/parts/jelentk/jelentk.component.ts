import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-jelentk',
  templateUrl: './jelentk.component.html',
  styleUrls: ['./jelentk.component.css']
})
export class JelentkComponent implements OnInit {

  courses: any;
  selectedCourse: any = {}
  user: any = {}
  isApplied: boolean = false

  constructor(private base: BaseService) {}

  ngOnInit(): void {
    this.getCourses()
    this.getUser()
  }

  getCourses() {
    this.base.getCourses(this.courses).subscribe(
      (res) => {
        this.courses = res
        console.log(this.courses)
      },
      (error) => {
        console.error('Hiba történt a tanfolyamok lekérése során:', error)
      }
    );
  }

  async getUser(): Promise<any> {
    try {
      const user_id = localStorage.getItem('id')
      if (user_id) {
        this.user = await this.base.getOneUser(user_id).toPromise()
        if (this.user && this.user.courses) {
          this.isApplied = this.userHasApplied(this.user, this.selectedCourse.id)
        } else {
          console.log('A felhasználó nem vett fel tanfolyamokat.')
        }
      } else {
        console.error('Nincs felhasználó azonosító a localStorage-ban.')
      }
    } catch (error) {
      console.error('Hiba történt a felhasználó adatainak lekérése során:', error)
    }
  }

  async makeAttach() {
    try {
      await this.getUser();
      const user_id = localStorage.getItem('id')
      const course_id = localStorage.getItem('course_id')
  
      if (!course_id) {
        console.error('Hiba: Nincs kiválasztva tanfolyam.')
        return
      }
  
      if (this.isApplied) {
        console.log('Erre a tanfolyamra már jelentkeztél.', this.selectedCourse);
        localStorage.removeItem('course_id')
        return
      }
  
      if (user_id && course_id) {
        const response = await this.base.attach(user_id, this.selectedCourse.id).toPromise()
        console.log('Összekapcsolás sikeres:', response)
        this.isApplied = true;
      } else {
        console.error('Hiba: Nincs felhasználó vagy tanfolyam azonosító.')
      }
    } catch (error) {
      console.error('Hiba történt a makeAttach során:', error)
    } finally {
      localStorage.removeItem('course_id')
    }
  }
  

  userHasApplied(user: any, course_id: any): boolean {
    if (user && user.courses) {
      const appliedCourses = user.courses.map((course: any) => course.id)
      return appliedCourses.includes(course_id)
    }
    return false
  }

  sendApplication(course: any): void {
    this.selectedCourse = course
    localStorage.setItem('course_id', this.selectedCourse.id)
    this.makeAttach()
  }
  
}
