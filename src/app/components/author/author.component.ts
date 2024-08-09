import { Component } from '@angular/core';
import { AuthorPopUpComponent } from '../../author-pop-up/author-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  constructor(private dialogRef:MatDialog){

  }
  openDialog(){
   this.dialogRef.open(AuthorPopUpComponent)
  }
  
}
