import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class DeleteUserService {

    constructor(private http: HttpClient) { }

    private _url: string = `${environment.baseURL}/user/delete/:id`;

    deleteUser(data) {
        return this.http.put(this._url, data);
    }

}