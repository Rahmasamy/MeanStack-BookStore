import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatOption } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-author-pop-up',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,
    MatInputModule,MatOption,MatSelectModule],
  templateUrl: './author-pop-up.component.html',
  styleUrl: './author-pop-up.component.css'
})
export class AuthorPopUpComponent {
  constructor(private dialogRef:MatDialog){

  }
  closeDialog() {
    this.dialogRef.closeAll();
  }
}
