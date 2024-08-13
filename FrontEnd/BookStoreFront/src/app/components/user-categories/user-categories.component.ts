import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CategoryserviceService } from '../../services/categoryService/categoryservice.service';

@Component({
  selector: 'app-user-categories',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Necessary modules
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.css']
})
export class UserCategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private dialogRef: MatDialog, private categoryService: CategoryserviceService) {} // Inject the service

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response) => {
      
        this.categories = response.data; // Access the 'data' key
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  };
};

 
 
