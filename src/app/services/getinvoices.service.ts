import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetinvoicesService {

  constructor(private http: HttpClient) { }

  private _url: string = `${environment.baseURL}/invoice/getAll/1`;

  getInvoices(){
    let promise = new Promise((resolve, reject) => {
      this.http.get(this._url)
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
