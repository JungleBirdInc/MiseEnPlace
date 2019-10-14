import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class UpdateSingleBottleService {

    constructor(private http: HttpClient) {}

    updateOpenBottles(bottleId) {
        const promise = new Promise((resolve, reject) => {
            this.http.put(`openBottles/weight/${bottleId}`, bottleId)
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
