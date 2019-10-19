import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InitializeInventoryService {

  constructor(private http: HttpClient) { }

  private _url: string = `/inventory/initialize`;
  // ${environment.baseURL}
  initializeInventory(body){
    let promise = new Promise((resolve, reject) => {
      this.http.post(this._url, body)
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
