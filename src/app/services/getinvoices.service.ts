import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetinvoicesService {

  constructor(private http: HttpClient) { }

  private _url: string = `/invoice/getAll/1`;

  getInvoices(){
    return this.http.get(this._url);
  }
}
