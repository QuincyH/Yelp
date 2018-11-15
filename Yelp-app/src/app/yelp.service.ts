import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

let token = 'Bearer fGgqQXvzPtuzeVJS6FcBvVOKAx4r4BdhrNuWOvC0Tj2f06kLXpFhmYKlX4mxoZU54XHO0M9xMDyQGKQdXGDE8wHSdafMcgFTOAY1XOTfEqupZRd-Bn_qE7YXEJ3rW3Yx';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization': token  })
}

@Injectable({
  providedIn: 'root'
})
export class YelpService {
  baseUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location='
   cors = 'https://cors-anywhere.herokuapp.com/'


  constructor (public http: HttpClient) { }
    YelpMe(city, state, prices): Observable<any>{
      return this.http.get(`${this.cors}${this.baseUrl}${city},${state}&open_now=true&price=${prices}`, httpOptions);
    }
}
