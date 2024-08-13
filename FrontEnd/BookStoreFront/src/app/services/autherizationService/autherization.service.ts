import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutherizationService {

  constructor(private http: HttpClient) { }
}
