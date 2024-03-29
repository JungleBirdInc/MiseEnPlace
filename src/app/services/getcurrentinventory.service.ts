import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class GetCurrentInvService {

    constructor(private http: HttpClient) {}

    orgId = 1;
    // ${environment.baseURL}
    private _url: string = `${environment.baseURL}/inventory/getCurrent/${this.orgId}`;

    getCurentInventory() {
      const promise = new Promise((resolve, reject) => {
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

