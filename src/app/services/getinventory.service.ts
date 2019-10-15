import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetinventoryService {

  constructor(private http: HttpClient) { }

  private _url: string = `/inventory/getAll/1`;

  getInventory(){
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
