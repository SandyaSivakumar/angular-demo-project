import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Software } from '../model/software';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftwareServiceService {
  public swUrl: string;
  constructor(public http: HttpClient) {
    this.swUrl = "http://localhost:8080/software";
   }

  public findAll(): Observable<Software[]> {
      console.log(this.http);
      return this.http.get<Software[]>(this.swUrl);
    }
}




