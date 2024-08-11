import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
import { BookserviceService } from '../services/bookService/bookservice.service';
import { CommonModule } from '@angular/common';
import { CoreService } from '../coreService/core-service.service';

@Component({
  selector: 'app-adminbooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminbooks.component.html',
  styleUrl: './adminbooks.component.css'
})
export class AdminbooksComponent {
  books: any[] = [];

  constructor(private dialogRef: MatDialog, private bookService: BookserviceService, private _coreService: CoreService) {} // Inject the service

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(
      (response) => {
      
        this.books = response.data; // Access the 'data' key
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

 
 

  openAddBookForm() {
    const dialogRef = this.dialogRef.open(PopUpComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getBooks();
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

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getBooks();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialogRef.open(PopUpComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getBooks();
        }
      },
    });
  }
}
