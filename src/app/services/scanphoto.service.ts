import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class ScanphotoService {

    constructor(private http: HttpClient) { }

    private _url: string = `${environment.baseURL}/scan/photo`;

    scanPhoto(data) {
        console.log('routing...');
        console.log('SERVICE RECIEVED', data);

        let promise = new Promise((resolve, reject) => {
        this.http.post(this._url, data)
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
