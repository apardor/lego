import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})



export class ThemeComponent implements OnInit{ 
  id: any;
  data:any;
  

  constructor(private route: ActivatedRoute,
              private themeService: ThemeService){}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.themeService.getSetById(this.id).subscribe((res:any)=> {
        this.data = res;
        })
    });

    

    

  }

}
