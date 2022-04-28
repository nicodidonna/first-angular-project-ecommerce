import { Injectable } from '@angular/core';
import { Prodotti } from './product';
import { PRODUCTS } from './product-list/mock-product';

@Injectable({
  providedIn: 'root'
})
export class ProdottoServiceService {

getProdotti():Prodotti[]{
  return PRODUCTS;
}
getProdottoID(id : number):Prodotti{
  return PRODUCTS.find(product=>{
   return product.id==id})
}

aggiungiLike(prodotto){
   prodotto.like = prodotto.like+1;
}

  constructor() { }
}
