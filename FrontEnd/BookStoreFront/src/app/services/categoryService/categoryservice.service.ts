import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  private apiUrl = 'http://localhost:8080/api/bookstore/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {

    return this.http.get<any>(this.apiUrl);
  }

  createCategory(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateCategory(id: any, data: any): Observable<any> {
    
   
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }


  deleteCategory(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
