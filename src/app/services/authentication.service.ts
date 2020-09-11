import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  // authenticate(username:string,password:string){
  //   const headers=new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});
  //   return this.http.get
  // }
}
