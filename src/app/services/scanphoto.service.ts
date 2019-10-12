import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class ScanphotoService {

    constructor(private http: HttpClient) { }

    private _url: string = `/scan/photo`;

    scanPhoto(data) {
        console.log('routing...');
        console.log('SERVICE RECIEVED', data);
      return this.http.post(this._url, data);
    }

}