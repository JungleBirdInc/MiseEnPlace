import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UpdateCurrentInvService {

    constructor(private http: HttpClient) { }
    id = 17;
    private _url: string = `/updateCurrent/${this.id}`;

    updateInv(data) {
      let promise = new Promise((resolve, reject) => {
        this.http.put(this._url, data)
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