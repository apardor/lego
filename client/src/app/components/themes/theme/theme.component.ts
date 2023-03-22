import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit{

  id: any;

  constructor(private route: ActivatedRoute){}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

  }

}
