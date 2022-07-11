import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProdottoServiceService } from '../prodotto-service.service';
import { Prodotti } from '../product';
import { PRODUCTS } from './mock-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 @Output() dettaglio = new EventEmitter<number>();

  constructor(private router:Router, private prodottoServizio: ProdottoServiceService) {
   
   }

listaProdotti: Prodotti[];
  ngOnInit(): void {
   this.listaProdotti = this.prodottoServizio.getProdotti();
  }

  showDetail(id) {
    console.log(id);
    this.router.navigate(["/product-detail", {id:id}])
  }
 
  
}
