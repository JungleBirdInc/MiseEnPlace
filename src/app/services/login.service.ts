import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'; // ... ?????

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private LoginEndpoint = `${environment.Base_API_URL}/api/createUser`; // not accurate endpoint

    constructor(
        private http: HttpClient
    ) { }

signIn(userData) {
        return this.http.post(this.LoginEndpoint, userData);
    }
}
