import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewrepService {

  constructor(private http: HttpClient) { }

  private _url: string = `/api/createRep`;

  regRep(data) {
    console.log(data, 'DATA FROM REP SERVICE');
    return this.http.post(this._url, data);
  }

}
