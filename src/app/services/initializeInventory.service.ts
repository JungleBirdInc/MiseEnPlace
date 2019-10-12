import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InitializeInventoryService {

  constructor(private http: HttpClient) { }

  private _url: string = `/inventory/initialize`;

  initializeInventory(body){
    return this.http.post(this._url, body);
  }

}
