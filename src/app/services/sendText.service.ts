import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class SendTextService {

    constructor(private http: HttpClient) { }
    // ${environment.baseURL}
    private _url: string = `${environment.baseURL}/sms/text`;

    textOrder(data) {
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