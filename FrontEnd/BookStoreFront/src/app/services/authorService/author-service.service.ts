import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  private apiUrl = 'http://localhost:8080/api/bookstore/authors';

  constructor(private http: HttpClient) {}

  getAuthos(): Observable<any> {

    return this.http.get<any>(this.apiUrl);
  }

  createAuthor(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  updateAuthor(id: any, data: any): Observable<any> {
    
   
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }


  deleteAuthor(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
