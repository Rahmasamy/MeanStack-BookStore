// import { Component, Inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatCommonModule, MatOption } from '@angular/material/core';
// import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog'
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AuthorServiceService } from '../services/authorService/author-service.service';
// import { CoreService } from '../coreService/core-service.service';
// @Component({
//   selector: 'app-author-pop-up',
//   standalone: true,
//   imports: [CommonModule,MatFormFieldModule,
//     MatInputModule,MatOption,MatSelectModule,ReactiveFormsModule],
//   templateUrl: './author-pop-up.component.html',
//   styleUrl: './author-pop-up.component.css'
// })
// export class AuthorPopUpComponent {
//   authorForm: FormGroup;
//   Authors: any[] = [];
//   selectedFile: File | null = null;
//   constructor(
//     private fb: FormBuilder,
//     private authorService: AuthorServiceService,
//     private dialogRef: MatDialogRef<AuthorPopUpComponent>,
//     private _coreService: CoreService,
    
  
//     @Inject(MAT_DIALOG_DATA) public data: any, ) {
//       console.log(data);
//       this.authorForm = this.fb.group({
        
//         firstName: ['', [Validators.minLength(3)]],
//         lastName: ['', [Validators.minLength(3)]],
//         imagePaths: ['', [Validators.minLength(3)]],
    
//       });
      
//   }

//   ngOnInit(): void {
//     this.authorForm.patchValue(this.data);
   
//   }
//   onFileChange(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       const files = input.files;
//       // Create FormData object to send files
//       const formData = new FormData();
//       Array.from(files).forEach(file => formData.append('imagePaths', file));
//       // Append other form data
//       Object.keys(this.authorForm.value).forEach(key => {
//         if (key !== 'imagePaths') {
//           formData.append(key, this.authorForm.value[key]);
//         }
//       });
//       // Set the formData to a variable and use it in onFormSubmit
//       this.formData = formData;
//     }
//   }

//   onFormSubmit() {
//     if (this.authorForm.valid) {
//       console.log(this.data);
//       if (this.data) {
//         this.authorService
//           .updateAuthor(this.data._id, this.authorForm.value)
//           .subscribe({
//             next: (val: any) => {
//               this._coreService.openSnackBar('book detail updated!');
//               console.log(this.data);
//               this.dialogRef.close(true);
//             },
//             error: (err: any) => {
//               console.error(err);
//             },
//           });
//       } else {
//         this.authorService.createAuthor(this.authorForm.value).subscribe({
//           next: (val: any) => {
//             this._coreService.openSnackBar('book added successfully');
//             this.dialogRef.close(true);
//           },
//           error: (err: any) => {
//             console.error(err);
//           },
//         });
//       }
//     }
//   }


//   closeDialog() {
//     this.dialogRef.close(true);
//   }
// }
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCommonModule, MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthorServiceService } from '../services/authorService/author-service.service';
import { CoreService } from '../coreService/core-service.service';

@Component({
  selector: 'app-author-pop-up',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOption,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './author-pop-up.component.html',
  styleUrls: ['./author-pop-up.component.css']
})
export class AuthorPopUpComponent {
  authorForm: FormGroup;
  formData: FormData = new FormData(); // Add this to hold the FormData for file uploads
  Authors: any[] = [];

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorServiceService,
    private dialogRef: MatDialogRef<AuthorPopUpComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.authorForm = this.fb.group({
      firstName: ['', [Validators.minLength(3)]],
      lastName: ['', [Validators.minLength(3)]],
      imagePaths: [null] // Initialize as null
    });
  }

  ngOnInit(): void {
    this.authorForm.patchValue(this.data);
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = input.files;
      this.formData = new FormData();
      Array.from(files).forEach(file => this.formData.append('imagePaths', file));
      // Append other form data
      Object.keys(this.authorForm.value).forEach(key => {
        if (key !== 'imagePaths') {
          this.formData.append(key, this.authorForm.value[key]);
        }
      });
    }
  }

  onFormSubmit() {
        if (this.authorForm.valid) {
          console.log(this.data);
          if (this.data) {
            this.authorService
              .updateAuthor(this.data._id, this.authorForm.value)
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
            this.authorService.createAuthor(this.authorForm.value).subscribe({
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

  closeDialog(): void {
    this.dialogRef.close(true);
  }
}

