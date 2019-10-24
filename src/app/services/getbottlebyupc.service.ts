import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetBottleByUPCService {

  constructor(private http: HttpClient) { }

//   private _url: string = `${environment.baseURL}/openbottles/`;
// ${environment.baseURL}
  getBottleUPC(upc) {
    console.log(`UPC: ${upc}`);
    let promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.baseURL}/openBottles/getAll/1`)
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
