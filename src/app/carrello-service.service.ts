import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Prodotti } from './product';

@Injectable({
  providedIn: 'root'
})
export class CarrelloServiceService {
  carrello : Prodotti[] = [];
  aggiornaCarrelloAddEvent = new Subject<Prodotti[]>();

  getCarrello(){
    return this.carrello;
  }

  aggiungiCarrello(prodottoSelezionato : Prodotti){
    this.carrello.push(prodottoSelezionato);
    this.aggiornaCarrelloAddEvent.next(this.carrello);
  }

  svuotaCarrello(){
    this.carrello = [];
    this.aggiornaCarrelloAddEvent.next(this.carrello);
  }

  getTotaleCarrello(){
    let prezzoTotale : number = 0;
    this.carrello.forEach((prodottoCarrello) => {
      prezzoTotale = prezzoTotale + prodottoCarrello.prezzo;
    })
    this.aggiornaCarrelloAddEvent.next(this.carrello);
    return prezzoTotale;
  }

  rimuoviDaCarrello(i : number){
   //let carrelloFiltrato = this.carrello.filter((prodottoCarrello) => prodottoCarrello.id !== id)
   //let carrelloFiltrato = this.carrello.splice(i,1);
   this.carrello.splice(i,1);
   this.aggiornaCarrelloAddEvent.next(this.carrello);
  }

  constructor() { }
}

