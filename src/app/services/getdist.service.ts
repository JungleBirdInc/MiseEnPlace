import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdistService {

  constructor(private http: HttpClient) { }

  private _url: string = `/distributor/getAll/1`;

  getDistributors(){
    return this.http.get(this._url);
  }
}
