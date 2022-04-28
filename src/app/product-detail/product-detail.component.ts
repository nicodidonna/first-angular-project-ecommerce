import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrelloServiceService } from '../carrello-service.service';
import { ProdottoServiceService } from '../prodotto-service.service';
import { Categoria, Prodotti } from '../product';
import { PRODUCTS } from '../product-list/mock-product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  prodottiMenu: Prodotti[];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.prodottoSelezionato = this.prodottoServizio.getProdottoID(this.id);
    });
    
  }
  prodottoSelezionato : Prodotti;
  
  

  
  id : number = 0;
  constructor(private route: ActivatedRoute, private prodottoServizio : ProdottoServiceService, private servizioCarrello : CarrelloServiceService) { 
    
    
  }

  aggiungiCarrello(){
   this.servizioCarrello.aggiungiCarrello(this.prodottoSelezionato);
   console.log(this.servizioCarrello.getCarrello());
  }

  aggiungiLike(prodotto : Prodotti){
    this.prodottoServizio.aggiungiLike(prodotto);
  }
  
  

}
