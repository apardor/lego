import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isLoading = false;
  hasError = false
  data :any;
  movies: any;
  city:any;
  space:any;
  parameter: any;
  

  constructor(private themeService: ThemeService,
              private route: ActivatedRoute ){}

  ngOnInit(): void {
 
    
    this.route.params.subscribe( () =>{
      this.parameter = this.route.snapshot.params['theme'];
      switch(this.parameter){
        case 'movies':
          this.themeService.getMovieThemes().subscribe((res:any) =>{
            this.data = res;
          });
          break;
        case 'city':
          this.themeService.getCityThemes().subscribe((res:any) => this.data = res);
          break;
        case 'space':
          this.themeService.getSpaceThemes().subscribe((res:any) => this.data = res);
          break;  
          default:
          break;
        }
    });
  }
}

