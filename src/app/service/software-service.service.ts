import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Software } from '../model/software';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftwareServiceService {
  public swUrl: string;
  public http: HttpClient;
  constructor() {
    this.swUrl = "http://localhost:8080/software";
   }

  public findAll(): Observable<Software[]> {
      console.log(this.swUrl);
      return this.http.get<Software[]>(this.swUrl);
    }
}




