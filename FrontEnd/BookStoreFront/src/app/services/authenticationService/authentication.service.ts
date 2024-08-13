import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl="http://localhost:8080/api/";
  constructor(private http: HttpClient) {

   }
   getAllUsers(){
    this.http.get(this.apiUrl);
   }
   getUserById(id:any){
    this.http.get(`${this.apiUrl}/${id}`)

   }
   processRegisteration(inputData:any){
   return this.http.post(this.apiUrl,inputData)
   }
   updateUser(id:any,inputData:any){
      return this.http.put(this.apiUrl+'/'+id,inputData)
   }
}
