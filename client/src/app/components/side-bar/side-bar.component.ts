import { Component, OnInit } from '@angular/core';
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

  constructor(private themeService: ThemeService ){}

  ngOnInit(): void {
    this.themeService.getThemeData().subscribe(
      (res:any) => this.data = res.results, 
    )
  }


}

