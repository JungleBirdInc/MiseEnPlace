import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; // ... ?????


@Injectable({
    providedIn: 'root'
})

export class DistributorService {

    constructor(
        private http: HttpClient
    ) { }

    func() {

    }

}
