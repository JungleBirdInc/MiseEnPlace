import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class InventoryWizardService {

    constructor(
        private http: HttpClient
    ) { }

    func() {

    }
}
