import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
    getData(){
      return this.http.get('https://rebrickable.com/api/v3/lego/sets/?key=b32f1aff042501520288add316a77ad3');
    }
   
}

