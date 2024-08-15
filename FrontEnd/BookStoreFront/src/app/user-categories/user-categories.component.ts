import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryserviceService } from '../services/categoryService/categoryservice.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-categories',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterLink],
  templateUrl: './user-categories.component.html',
  styleUrl: './user-categories.component.css'
})
export class UserCategoriesComponent {
  categories: any[] = [];

  constructor(private dialogRef: MatDialog, private categoryService: CategoryserviceService,private route:Router) {} // Inject the service

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
  
  
}
