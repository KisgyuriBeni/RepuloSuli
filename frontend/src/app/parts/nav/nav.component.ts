import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const storedValue = sessionStorage.getItem('isChecked')
    this.isChecked = storedValue ? (storedValue === 'true') : false
  }
  clearSessionStorage(): void {
    sessionStorage.removeItem('isChecked') 
    // Sessionstorage törlés teszt jelleggel
  }
  
}
