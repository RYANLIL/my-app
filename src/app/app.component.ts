import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';
  carparts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "The very best tires",
    "inStock":5,
    "price":4.99
  },
  {
    "id": 2,
    "name": "Reinforced Shocks ",
    "description": "Schocks made from kryptonite",
    "inStock":4,
    "price":2.99
  },
  {
    "id": 3,
    "name": "Padded Seats",
    "description": "Super soft seats",
    "inStock":0,
    "price":3.99
  }];

  totalCarParts(){
    //Java Script
    //return this.carparts.reduce(function(prev,current){return prev + current.inStock;},0);
    //TYPE SCRIPT
    return this.carparts.reduce((prev,current)=>{return prev + current.inStock},0);

    // let sum = 0;
    // for(let carpar of this.carparts)
    // {
    //   sum += carpar.inStock;
    // }
    // return sum;
  }
  
}
