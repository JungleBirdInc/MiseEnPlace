import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UPCService {
    private UPCSource = new BehaviorSubject('default message');
    currentMessage = this.UPCSource.asObservable();

    constructor() {}

    sendUPC(code: string) {
        this.UPCSource.next(code);
    }
}
