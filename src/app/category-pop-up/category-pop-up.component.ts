import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatOption } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-category-pop-up',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,
    MatInputModule,MatOption,MatSelectModule],
  templateUrl: './category-pop-up.component.html',
  styleUrl: './category-pop-up.component.css'
})
export class CategoryPopUpComponent {
  constructor(private dialogRef:MatDialog){

  }
  closeDialog() {
    this.dialogRef.closeAll();
  }
}
