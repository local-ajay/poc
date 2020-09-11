import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredVeriUser } from 'src/app/model/CredVeriUser';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCredentialsService {

  _url='http://localhost:8080/login/get';
  constructor(private http:HttpClient,private headers:HeaderService) { }

  getLoginCredentials():Observable<CredVeriUser[]>{
    
    return this.http.get<CredVeriUser[]>(this._url,{headers:this.headers.getHeaders()});
  }
  
}
