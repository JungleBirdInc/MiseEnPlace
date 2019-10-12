import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewdistService {

  constructor(private http: HttpClient) { }

  private _url: string = `/distributor/create`;

  regDist(data) {
    console.log(data, 'DATA FROM CREATE DIST SERVICE');
    return this.http.post(this._url, data);
  }

}
