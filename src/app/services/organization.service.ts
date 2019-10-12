import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  private _url: string = `/organization/create`;

  regOrg(data) {
    console.log(data, 'DATA FROM ORGANIZATION SERVICE');
    return this.http.post(this._url, data);
  }

}
