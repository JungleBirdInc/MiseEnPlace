import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { enviorment } from '../..enviorments/enviorment' // ... ?????

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    private createUserEndpoint = `${enviorment.BASE_API_URL}/api/createUser`;

    constructor(
        private http: HttpClient
    ) { }

    createUser(userData) {
        return this.http.post(this.createUserEndpoint, userData);
    }
}
