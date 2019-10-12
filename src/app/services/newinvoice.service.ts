import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewinvoiceService {

  constructor(private http: HttpClient) { }

  private _url: string = `/invoice/record`;

  newInvoice(body){
    return this.http.post(this._url, body);
  }

}
