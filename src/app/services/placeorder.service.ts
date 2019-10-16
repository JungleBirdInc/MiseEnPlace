import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostOrderService {

  constructor(private http: HttpClient) { }

  private _url: string = `/order/send`;

  sendOrder(data) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this._url, data, {responseType: 'text'})
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
