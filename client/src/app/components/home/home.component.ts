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


        let background:any;
        let clickX:any;
        let clickY:any;
        let drawSpaceship = false;


        let img:any;
        let x:any = -50;
        let speed:any = 5;


        p.preload = function(){
          img = p.loadImage('../../assets/spaceship1.png');
          background = p.loadImage('../../assets/space.png')
        }

        p.setup = () => {
          p.createCanvas(p.windowWidth,p.windowHeight-64);
        };

        p.draw = () => {
          clickX = p.mouseX;
          clickY = p.mouseY - 112;
          p.clear();
          p.background(background);
          if (drawSpaceship) {
            p.image(img, x, clickY);
            x += speed;
          }
        };

        p.mouseClicked =() => {
          drawSpaceship = true;
        }

        p.mouseReleased= () => {
          drawSpaceship = false;
        }
    });
  }



  ngOnDestroy() {
    sketch.remove();
  }
  
}    

   
// let background:any;
// let clickX:any;
// let clickY:any;
// let drawSpaceship = false;


// let img:any;
// let x:any = -50;
// let speed:any = 5;


// p.preload = function(){
//   img = p.loadImage('../../assets/spaceship.png');
//   background = p.loadImage('../../assets/space.png')
//  }

// p.setup = () => {
//   p.createCanvas(p.windowWidth,p.windowHeight-64);
// };

// p.draw = () => {
//   clickX = p.mouseX;
//   clickY = p.mouseY - 112;
//   p.clear();
//   p.background(background);
//   if (drawSpaceship) {
//     p.image(img, x, clickY);
//     x += speed;
//   }
// };

// p.mouseClicked =() => {
//   drawSpaceship = true;
// }

// p.mouseReleased= () => {
//   drawSpaceship = false;
// }





// let images:any = [];
// let myImage:any;
// let background:any;
// let image:any;
// let clickX:any;
// let clickY:any;
// let drawSpaceship = false;
// let speed:any = 5;

// p.preload = () => {
//   myImage = p.loadImage('../../assets/spaceship.png');
//   background = p.loadImage('../../assets/space.png')
// };

// p.setup = () => {
//   p.createCanvas(p.windowWidth, p.windowHeight-64);
// };

// p.draw = () => {
//   p.background(background);
//   for (let i = 0; i < images.length; i++) {
//     images[i].display();
//   }
// };

// p.mouseClicked = () => {
//   drawSpaceship = true;
//   clickX = p.mouseX - 100;
//   clickY = p.mouseY - 112;
//   let imageObj = new ImageObject(myImage, clickX, clickY);
//   images.push(imageObj);
// };

// class ImageObject {
//   constructor(myImage:any, clickX:any, clickY:any) {
//     image = p.image(myImage, clickX, clickY);
//     clickX += speed;
//   }
  
//   display() {
//     p.image(image);
//   }
// }

// p.mouseReleased= () => {
//     drawSpaceship = false;
//   } 