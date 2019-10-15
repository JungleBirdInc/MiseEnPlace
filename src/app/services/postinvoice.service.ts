import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewInvoiceService {

  constructor(private http: HttpClient) { }

  private _url: string = `/product/create`;

  postInv(data) {
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