import { Component } from '@angular/core';
import { Categoria, Prodotti } from './product';
import { PRODUCTS } from './product-list/mock-product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-app';
  dataOggi = new Date(2022,3,24,15,30);
  dataPassata = new Date(2021,3,24);
  
  constructor(){ 
  }
 

}
