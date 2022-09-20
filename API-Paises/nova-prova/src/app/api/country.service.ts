import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlBase = 'https://restcountries.com/v3.1/all';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {

    return this.http.get(`${urlBase}`).toPromise();
  }

}
