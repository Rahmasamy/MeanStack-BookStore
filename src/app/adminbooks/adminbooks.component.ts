import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-adminbooks',
  standalone: true,
  imports: [],
  templateUrl: './adminbooks.component.html',
  styleUrl: './adminbooks.component.css'
})
export class AdminbooksComponent {
  constructor(private dialogRef:MatDialog){

  }
  openDialog(){
   this.dialogRef.open(PopUpComponent)
  }
  
}
