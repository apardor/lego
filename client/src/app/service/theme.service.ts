import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(public http: HttpClient) {}

  getThemeData(){
    return this.http.get('http://localhost:8000/api/themes');
  }

  getMovieThemes(){
    return this.http.get('http://localhost:8000/api/themes/movies');
  }

  getCityThemes(){
    return this.http.get('http://localhost:8000/api/themes/city')
  }

  getSpaceThemes(){
    return this.http.get('http://localhost:8000/api/themes/space')
  }

}
