import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SampleUser } from 'src/app/model/SampleUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {

  static postctr:number=0;
  constructor(private http:HttpClient) { }

  getData(application:string,environment:string):Observable<SampleUser[]>{
    return this.http.get<SampleUser[]>(`http://localhost:8080/${application}/${environment}`);
  }

  postData(sampleUser:SampleUser[],application:string,environment:string):Observable<Object>{
    return this.http.post<SampleUser>(`http://localhost:8080/${application}/${environment}`,sampleUser);
  }
}
