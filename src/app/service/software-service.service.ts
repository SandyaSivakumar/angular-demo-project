import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Software } from '../model/software';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SoftwareServiceService {
  private swUrl: string;
  constructor() {
    this.swUrl = "http://localhost:8080/software";
   }

  public findAll(): Observable<Software[]> {
      return this.http.get<Software[]>(this.swUrl);
    }
}
