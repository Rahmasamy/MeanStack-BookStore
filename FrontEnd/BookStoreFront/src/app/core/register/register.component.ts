import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "../../services/authenticationService/authentication.service";
import { Router } from "@angular/router";
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ToastrService] // Ensure ToastrService is provided here
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private builder: FormBuilder, private toastr: ToastrService,private auth:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      role: [''],
      isAdmin: true,
      isActive: false
    });
  }

  processRegisteration() {

    if (this.registerForm.valid) {
      this.auth.processRegisteration(this.registerForm.value).subscribe(
        res => { this.toastr.success('please contact admin for complete process','Registration successful!')
          // this.route.navigate(['login'])
        }
     
      )
      
    } else {
      this.toastr.warning('Please fill out the form correctly.');
    }
  }
}
