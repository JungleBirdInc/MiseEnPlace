import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
    private UPCSource = new BehaviorSubject('default message');
    currentMessage = this.UPCSource.asObservable();

    constructor() {}

    sendUPC(barcode: string) {
        this.UPCSource.next(barcode);
    }
}
