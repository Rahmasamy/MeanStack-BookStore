import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../../services/authenticationService/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
   isAdmin: boolean = false;
  isLogin:boolean=false
  userData:any
  
   constructor(private auth:AuthenticationService){
     auth.userData.subscribe({
      next:(res) => { res?  this.isLogin=true: this.isLogin=false }
     });
     this.auth.checkRole().subscribe({
      next: (isAdmin) => {
        this.isAdmin = isAdmin;
        
        console.log(this.isAdmin);
      }
    });

   }
  logout(){
   
    this.isAdmin = false;
    this.auth.logOut()

  }
 
 
}
