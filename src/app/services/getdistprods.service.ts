import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdistprodsService {

  constructor(private http: HttpClient) { }

  private _url: string = `/product/getAll`;

  getDistProds(id) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${this._url}/${id}`)
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
