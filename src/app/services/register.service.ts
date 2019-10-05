import { Injectable, RootRenderer } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'; // ... ?????

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    // private createUserEndpoint = `${environment.Base_API_URL}/api/createUser`;

    constructor(
        // private http: HttpClient
    ) { }

    createUser(userData) {
        // return this.http.post(this.createUserEndpoint, userData);
    }
}
