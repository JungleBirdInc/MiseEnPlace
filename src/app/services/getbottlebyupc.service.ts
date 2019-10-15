import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBottleByUPCService {

  constructor(private http: HttpClient) { }

//   private _url: string = `/openbottles/`;

  getBottleUPC(upc) {
    console.log(`UPC: ${upc}`);
    let promise = new Promise((resolve, reject) => {
      this.http.get(`/openBottles/${upc}`)
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
