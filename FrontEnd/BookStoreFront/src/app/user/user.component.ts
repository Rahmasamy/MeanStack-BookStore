import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryPopUpComponent } from '../category-pop-up/category-pop-up.component';
import { CoreService } from '../coreService/core-service.service';
import { CategoryserviceService } from '../services/categoryService/categoryservice.service';
import { AuthenticationService } from '../services/authenticationService/authentication.service';
import { CommonModule } from '@angular/common';
import { UserInterface} from './userInterface'
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any[] = [];
 
  constructor(private dialogRef: MatDialog, private auth: AuthenticationService,private _coreService:CoreService) {} // Inject the service

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.auth.getAllUsers().subscribe(
      (response: UserInterface) => {
        console.log(response);
        this.users = response.data; // Now TypeScript recognizes 'data'
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

 
 

  openAddCategoryForm() {
    const dialogRef = this.dialogRef.open(CategoryPopUpComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUsers();
        }
      },
    });
  }

  
  getUserById(id: number) {
    this.auth.getUserById(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getUsers();
      },
      error: console.log,
    });
  }

  deleteUserById(id: number) {
    this.auth.deleteUserById(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getUsers();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialogRef.open(CategoryPopUpComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUsers();
        }
      },
    });
  }
}
