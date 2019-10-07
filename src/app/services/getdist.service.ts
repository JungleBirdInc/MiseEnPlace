import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDistributer } from '../interface/distributer';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetdistService {

  constructor(private http: HttpClient) { }

  private _url: string = `/api/getAllDists/1`;

  getDistributers(): Observable<IDistributer[]>{
    return this.http.get<IDistributer[]>(this._url);
  }
}
