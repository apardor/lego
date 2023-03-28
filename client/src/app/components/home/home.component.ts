import { Component, OnDestroy, OnInit } from '@angular/core';
import * as p5 from 'p5';

let sketch: p5;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {

  myData: any;

  constructor(){}

  ngOnInit() {
    sketch = new p5((p) => {

      let img:any;
      let clickX;
      let clickY;
      p.preload = function(){
        img = p.loadImage('../../assets/minifigure-250.png')
       }

      p.setup = () => {
        p.createCanvas(p.windowWidth,p.windowHeight );
        p.background(255);
      };
      
      p.draw = () => {
        p.draw = function() {
               clickX = p.mouseX - 100;
               clickY = p.mouseY - 112;
               if(p.mouseIsPressed){
                 p.image(img,clickX,clickY)
               }
             };     
      };
    });
  }

  ngOnDestroy() {
    sketch.remove();
  }
  
}    
  


  

  
