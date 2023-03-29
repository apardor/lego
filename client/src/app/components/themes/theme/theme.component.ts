import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})



export class ThemeComponent implements OnInit{ 
  id: any;
  data:any;
  page:any;
  totalPages:any;
  collection:any;
  

  constructor(private route: ActivatedRoute,
              private themeService: ThemeService,
              private router: Router){}


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.route.queryParams.subscribe((queryParams: Params)=>{
        this.page = queryParams['page'] ? queryParams['page'] : 1;
      })
      this.themeService.getSetById(this.id).subscribe((res:any)=> {
        this.collection = res;
        this.data = res;      
        this.totalPages = res.totalPages;
        }) 
    })  
  }
}

