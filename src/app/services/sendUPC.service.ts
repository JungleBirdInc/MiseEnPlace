import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class UPCService {
    private UPCSource = new BehaviorSubject('default code');
    currentCode = this.UPCSource.asObservable();

    constructor() {}

    sendUPC(code: string) {
        this.UPCSource.next(code);
    }
}
