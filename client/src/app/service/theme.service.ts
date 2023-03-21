import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) {}

  getThemeData(){
    return this.http.get('https://rebrickable.com/api/v3/lego/themes/?key=b32f1aff042501520288add316a77ad3');
  }
}
