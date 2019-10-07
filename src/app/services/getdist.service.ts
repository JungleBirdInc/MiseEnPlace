import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDistributor } from '../interface/distributor';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetdistService {

  constructor(private http: HttpClient) { }

  private _url: string = `/api/getAllDists/1`;

  getDistributors(): Observable<IDistributor[]>{
    return this.http.get<IDistributor[]>(this._url);
  }
}
