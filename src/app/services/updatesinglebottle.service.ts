import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class UpdateSingleBottleService {

    constructor(private http: HttpClient) {}

    updateOpenBottles(bottleId) {
        const promise = new Promise((resolve, reject) => {
            this.http.put(`${environment.baseURL}openBottles/weight/${bottleId}`, bottleId)
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
