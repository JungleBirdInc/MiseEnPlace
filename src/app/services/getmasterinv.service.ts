import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMasterInvService {

  constructor(private http: HttpClient) { }
  orgId = 1;
  
  private _url: string = `/inventory/getMaster/${this.orgId}`;

  getMaster(){
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
