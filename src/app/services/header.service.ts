import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private username:string='root';
  private password:string='root';
  constructor() { }
  getHeaders():HttpHeaders{
    const headers=new HttpHeaders({Authorization:'Basic ' + btoa(this.username+':'+this.password)});
    return headers;
  }
}
