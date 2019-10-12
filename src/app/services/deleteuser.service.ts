import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeleteUserService {

    constructor(private http: HttpClient) { }

    private _url: string = `/user/delete/:id`;

    deleteUser(data) {
        return this.http.put(this._url, data);
    }

}