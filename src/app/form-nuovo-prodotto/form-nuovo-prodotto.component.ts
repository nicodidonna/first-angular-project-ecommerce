import { Component, OnInit } from '@angular/core';
import { Categoria, Prodotti } from '../product';
import { PRODUCTS } from '../product-list/mock-product';

@Component({
  selector: 'app-form-nuovo-prodotto',
  templateUrl: './form-nuovo-prodotto.component.html',
  styleUrls: ['./form-nuovo-prodotto.component.css']
})
export class FormNuovoProdottoComponent implements OnInit {
  nuovoProdotto : Prodotti;
  nome : string;
  descrizione : string;
  img : string;
  prezzo : number;
  categoria = Categoria;
  categoriaScelta : any;

  constructor() { }

  ngOnInit(): void {
   // nuovoProdotto = new Prodotti(0,"Pasta",Categoria.antipasto,10,"Pasta buona","img.jpg", 0)
   
  }
 
  aggiungiPiatto(){
    this.nuovoProdotto = new Prodotti(PRODUCTS.length+1,this.nome,this.categoriaScelta.value,this.prezzo,this.descrizione,this.img,0);
    PRODUCTS.push(this.nuovoProdotto);
    console.log(PRODUCTS);
    console.log(this.categoriaScelta.value)
  }
  
}
