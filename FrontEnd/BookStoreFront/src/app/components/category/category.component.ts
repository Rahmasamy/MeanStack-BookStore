import { Component,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { CategoryPopUpComponent } from '../../category-pop-up/category-pop-up.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { CategoryserviceService } from '../../services/categoryService/categoryservice.service';
import { CoreService } from '../../coreService/core-service.service';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private dialogRef: MatDialog, private categoryService: CategoryserviceService,private _coreService:CoreService) {} // Inject the service

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
  }

 
 

  openAddCategoryForm() {
    const dialogRef = this.dialogRef.open(CategoryPopUpComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCategories();
        }
      },
    });
  }

  
  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getCategories();
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
          this.getCategories();
        }
      },
    });
  }
}








