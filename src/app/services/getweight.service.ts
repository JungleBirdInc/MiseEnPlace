import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetweightService {

  constructor(private http: HttpClient) { }

  getWeight(){
    let promise = new Promise((resolve, reject) => {
      this.http.get('http://4a3c6ed3.ngrok.io/weigh')
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
