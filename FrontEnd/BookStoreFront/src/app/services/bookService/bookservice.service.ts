import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private apiUrl = 'http://localhost:8080/api/bookstore/books';
  private bookIdUrl="http://localhost:8080/api/bookstore/books/book"
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {

    return this.http.get<any>(this.apiUrl);
  }
  getBookById(id:any){
    return this.http.get(`${this.bookIdUrl}/${id}`)
  }

  createBook(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateBook(id: any, data: any): Observable<any> {


    return this.http.put(`${this.apiUrl}/${id}`, data);
  }


  deleteBook(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
