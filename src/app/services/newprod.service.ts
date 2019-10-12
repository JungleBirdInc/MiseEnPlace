import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewprodService {

  constructor(private http: HttpClient) { }

  private _url: string = `/product/create`;

  regProd(data) {
    return this.http.post(this._url, data);
  }

}
