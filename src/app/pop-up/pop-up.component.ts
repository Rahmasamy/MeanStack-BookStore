import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCommonModule, MatOption } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,
    MatInputModule,MatOption,MatSelectModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  constructor(private dialogRef:MatDialog){

  }
  closeDialog() {
    this.dialogRef.closeAll();
  }
}
