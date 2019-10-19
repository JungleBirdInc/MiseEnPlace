import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class GetSingleInvoiceService {

    constructor(private http: HttpClient) {}

    orgId = 1;

    private _url: string = `${environment.baseURL}/inventory/getOne/${this.orgId}`;

    getCurentInventory() {
      return this.http.get(this._url);
    }
}
