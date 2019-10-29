import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateWeightService {

  constructor(private http: HttpClient) { }

  private _url: string = `${environment.baseURL}/openBottles/upsert`;

  update(body){
    let promise = new Promise((resolve, reject) => {
      this.http.put(this._url, body)
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }
}
