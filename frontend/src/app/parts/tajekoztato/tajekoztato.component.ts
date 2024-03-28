import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tajekoztato',
  templateUrl: './tajekoztato.component.html',
  styleUrls: ['./tajekoztato.component.css']
})
export class TajekoztatoComponent implements OnInit{
  isChecked: boolean = false;

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    const storedValue = sessionStorage.getItem('isChecked');
    this.isChecked = storedValue ? (storedValue === 'true') : false;
    this.openSnackBarFromSessionStorage()
  }

  handleCheckboxChange(): void {
    this.isChecked = !this.isChecked;
    sessionStorage.setItem('isChecked', this.isChecked.toString());
  
    if (this.isChecked) {
      console.log('A checkbox be van jelölve. Most láthatóvá válnak bizonyos komponensek.');
    } else {
      console.log('A checkbox nincs bejelölve. Bizonyos komponensek most nem láthatóak.');
    }
    this.saveSnackBarState();
    location.reload();
  }
  
  saveSnackBarState(): void {
    const snackBarState = {
      message: 'A tájékoztató végére értél! Mostmár tovább léphetsz a tanfolyamokra.',
      action: 'Bezár'
    };
    sessionStorage.setItem('snackBarState', JSON.stringify(snackBarState));
  }
  
  openSnackBarFromSessionStorage(): void {
    const snackBarStateString = sessionStorage.getItem('snackBarState');
    if (snackBarStateString) {
      const snackBarState = JSON.parse(snackBarStateString);
      this.openSnackBar(snackBarState.message, snackBarState.action);
      sessionStorage.removeItem('snackBarState'); // Töröljük a sessionStorage-ből, hogy ne jelenjen meg újra a snackbar újratöltés után
    }
  }
  
  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000,
    });
  }
}
