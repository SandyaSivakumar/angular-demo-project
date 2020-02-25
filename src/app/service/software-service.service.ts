import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Software } from '../model/software';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftwareServiceService {
  public swUrl: string;
  public localUrl:string;
  constructor(public http: HttpClient) {
    this.swUrl = "http://localhost:8080/software";
    this.localUrl = "http://localhost:8080/software/";
   }

  public findAll(): Observable<Software[]> {
      console.log(this.http);
      return this.http.get<Software[]>(this.swUrl);
    }

    public updateViews(softwareId: String): Observable<Software> {
      return this.http.post<Software>(this.localUrl + softwareId,null);
  }
}





