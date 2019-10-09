import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetcategoriesService {

  constructor(private http: HttpClient) { }

  private _url: string = `/categories/categories`;

  getCategories(){
    return this.http.get(this._url);
  }

}
