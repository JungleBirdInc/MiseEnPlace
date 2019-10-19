import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class GetOpenBottlesService {

    constructor(private http: HttpClient) {}

    orgId = 1;
    // ${environment.baseURL}
    private _url: string = `${environment.baseURL}/openBottles/getAll/${this.orgId}`;

    getOpenBottles() {
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
