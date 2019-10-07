import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewprodService {

  constructor(private http: HttpClient) { }

  private _url: string = `/api/createProduct`;

  regProd(data) {
    console.log(data, 'DATA FROM CREATE PROD SERVICE');
    return this.http.post(this._url, data);
  }

}
