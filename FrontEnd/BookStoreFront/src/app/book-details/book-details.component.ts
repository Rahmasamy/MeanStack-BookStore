import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from '../services/bookService/bookservice.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
bookById:any
bookDetials:any = null;
constructor(private route:Router,private activeRoute: ActivatedRoute,private bookService:BookserviceService){
 this.getBookData();
}

getBookData(){
  
  this.bookById = this.activeRoute.snapshot.paramMap.get('id');
  console.log(this.bookById);
  this.bookService.getBookById(this.bookById).subscribe(
   
      (response:any) => {
        console.log("hhhhhhhhhhhhh");
        console.log(response.data);
        this.bookDetials = response.data; // Access the 'data' key
        // console.log(this.bookDetials);
      },
      (error) => {
        console.error('There was an error!', error);
      }
     
    
  )

 }
}
