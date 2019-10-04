import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { enviorment } from  ... ?????

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    private createUser = `${enviorment.BASE_API_URL}/api/createUser`;

    constructor(
        private http: HttpClient
    ) { }

    newUser(userData) {
        return this.http.post(this.createUser, userData);
    }
}