import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myData: any;

  constructor(){}


  ngOnInit(): void {
    let sketch = function(p: any) {
      let img:any;
      let clickX;
      let clickY;

      p.preload = function(){
        img = p.loadImage('../../assets/minifigure-250.png')
      }

      p.setup = function() {
        p.createCanvas(p.windowWidth,p.windowHeight );
        p.background(255);
        
      };
  
      p.draw = function() {
        clickX = p.mouseX - 100;
        clickY = p.mouseY - 112;
        if(p.mouseIsPressed){
          p.image(img,clickX,clickY)
        }
      };

 
    }
    new p5(sketch);
  }
}
