import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class GetSingleInvoiceService {

    constructor(private http: HttpClient) {}

    orgId = 1;

    private _url: string = `/inventory/getOne/${this.orgId}`;

    getCurentInventory() {
      return this.http.get(this._url);
    }
}
