import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetordersService {

  constructor(private http: HttpClient) { }

  private _url: string = `/order/getAll/1`;

  getOrders(){
    return this.http.get(this._url);
  }

}
