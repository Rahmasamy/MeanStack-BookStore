import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatOption } from '@angular/material/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CategoryserviceService } from '../services/categoryService/categoryservice.service';

@Component({
  selector: 'app-category-pop-up',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatInputModule,MatOption,MatSelectModule,MatDialogModule,ReactiveFormsModule],
  templateUrl: './category-pop-up.component.html',
  styleUrl: './category-pop-up.component.css'
})
export class CategoryPopUpComponent {
  
  categoryForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryserviceService,
    private dialogRef: MatDialogRef<CategoryPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ) {
    this.categoryForm = this.fb.group({
      name: '',
     
    });
  }

  ngOnInit(): void {
    this.categoryForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.categoryForm.valid) {
      console.log(this.data);
      if (this.data) {
        this.categoryService
          .updateCategory(this.data._id, this.categoryForm.value)
          .subscribe({
            next: (val: any) => {
              // this._coreService.openSnackBar('Employee detail updated!');
              console.log(this.data);
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.categoryService.createCategory(this.categoryForm.value).subscribe({
          next: (val: any) => {
            // this._coreService.openSnackBar('Employee added successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }


  closeDialog() {
    this.dialogRef.close(true);
  }
}
