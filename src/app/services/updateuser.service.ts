import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class UpdateUserService {

    constructor(private http: HttpClient) { }
    // ${environment.baseURL}
    private _url: string = `/user/update/:id`;

    updateUser(data) {
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