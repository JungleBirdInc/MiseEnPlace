import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewdistService {

  constructor(private http: HttpClient) { }

  private _url: string = `/distributor/create`;

  regDist(data) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this._url, data)
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
