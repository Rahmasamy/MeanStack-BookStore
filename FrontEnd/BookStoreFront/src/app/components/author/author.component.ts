import { Component } from '@angular/core';
import { AuthorPopUpComponent } from '../../author-pop-up/author-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthorServiceService } from '../../services/authorService/author-service.service';
import { CoreService } from '../../coreService/core-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  
  Authors: any[] = [];

  constructor(private dialogRef: MatDialog, private AuthorService: AuthorServiceService, private _coreService: CoreService) {} // Inject the service

  ngOnInit(): void {
    this.getAuthors();
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

 
 

  openAddAuthorForm() {
    const dialogRef = this.dialogRef.open(AuthorPopUpComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAuthors();
        }
      },
    });
  }

  

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  deleteAuthor(id: number) {
    this.AuthorService.deleteAuthor(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getAuthors();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialogRef.open(AuthorPopUpComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAuthors();
        }
      },
    });
  }
  openDialog(){
   this.dialogRef.open(AuthorPopUpComponent)
  }
  
}
