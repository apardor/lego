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

  getPiratesThemes(){
    return this.http.get('http://localhost:8000/api/themes/pirates')
  }

  getKnightsThemes(){
    return this.http.get('http://localhost:8000/api/themes/knights')
  }

  getCreatorThemes(){
    return this.http.get('http://localhost:8000/api/themes/creator')
  }

  getSportsThemes(){
    return this.http.get('http://localhost:8000/api/themes/sports')
  }

  getSetById(id:any){
    return this.http.get(`http://localhost:8000/api/sets/${id}`)
  }

}
