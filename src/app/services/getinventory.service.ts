import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetInventoryService {

  constructor(private http: HttpClient) { }

  private _url: string = `/api/getAllDists/1`;

  getCurrentInventory() {
    return this.http.get(this._url);
  }
}
