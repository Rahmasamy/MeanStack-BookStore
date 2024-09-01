import { Routes } from '@angular/router';


import { LandingBageComponent } from './components/landing-bage/landing-bage.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { AdminComponent } from './components/admin/admin.component'
import { BooksComponent } from './components/books/books.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthorComponent } from './components/author/author.component';
import { AdminbooksComponent } from './adminbooks/adminbooks.component';


export const routes: Routes = [
    { path: '', component: LandingBageComponent },  // Default route
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', component: AdminComponent,
        children: [
            {path:"",component:CategoryComponent},
            {path:"category",component:CategoryComponent}
            ,{path:"adminbooks",component:AdminbooksComponent}
            ,{path:"Authors",component:AuthorComponent}
        ]
    },
    { path :"books" ,component:BooksComponent}
];





