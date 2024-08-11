import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCommonModule, MatOption } from '@angular/material/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookserviceService } from '../services/bookService/bookservice.service';
import { CoreService } from '../coreService/core-service.service';
import { CategoryserviceService } from '../services/categoryService/categoryservice.service';
import { AuthorServiceService } from '../services/authorService/author-service.service';
@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,
    MatInputModule,MatOption,MatSelectModule,ReactiveFormsModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
 
  bookForm: FormGroup;
  categories: any[] = [];
  Authors: any[] = [];
  constructor(
    private fb: FormBuilder,
    private bookService: BookserviceService,
    private dialogRef: MatDialogRef<PopUpComponent>,
    private _coreService: CoreService,
    private CategoryService:CategoryserviceService,
    private AuthorService:AuthorServiceService,
  
    @Inject(MAT_DIALOG_DATA) public data: any, ) {
      console.log(data);
      this.bookForm = this.fb.group({
        
        title: ['', [Validators.minLength(3)]],
        img: ['', [Validators.minLength(3)]],
        AuthorId: ['', [Validators.minLength(3)]],
        CategoryId: ['', [Validators.minLength(3)]],
        Author: ['', [Validators.minLength(3)]],
        Category: ['', [Validators.minLength(3)]],
      });
      
  }

  ngOnInit(): void {
    this.bookForm.patchValue(this.data);
    this.getCategories();
    this.getAuthors()
  }

  getCategories(): void {
    this.CategoryService.getCategories().subscribe(
      (response) => {
      
        this.categories = response.data; // Access the 'data' key
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

  getAuthors(): void {
    this.AuthorService.getAuthos().subscribe(
      (response) => {
      
        this.Authors = response.data; // Access the 'data' key
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
  onFormSubmit() {
    if (this.bookForm.valid) {
      console.log(this.data);
      if (this.data) {
        this.bookService
          .updateBook(this.data._id, this.bookForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('book detail updated!');
              console.log(this.data);
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.bookService.createBook(this.bookForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('book added successfully');
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
