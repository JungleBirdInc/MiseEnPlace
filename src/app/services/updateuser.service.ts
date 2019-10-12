import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UpdateUserService {

    constructor(private http: HttpClient) { }

    private _url: string = `/user/update/:id`;

    updateUser(data) {
        return this.http.put(this._url, data);
    }

}