import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CoreService } from '../coreService/core-service.service';
import { AuthorServiceService } from '../services/authorService/author-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-authors',
  standalone: true,
  imports: [CommonModule, MatDialogModule, HttpClientModule],
  templateUrl: './user-authors.component.html',
  styleUrl: './user-authors.component.css'
})
export class UserAuthorsComponent {
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
  };
}
