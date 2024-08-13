import { Component } from '@angular/core';
import { AuthorPopUpComponent } from '../../author-pop-up/author-pop-up.component';
import { AuthorServiceService } from '../../services/authorService/author-service.service';
import { CoreService } from '../../coreService/core-service.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-user-authors',
  standalone: true,
  imports: [CommonModule, MatDialogModule, HttpClientModule], // Ensure MatDialogModule and HttpClientModule are imported
  templateUrl: './user-authors.component.html',
  styleUrls: ['./user-authors.component.css'] // Corrected to styleUrls
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
};
