import { Component, OnInit } from '@angular/core';
import { CarrelloServiceService } from '../carrello-service.service';
import { Prodotti } from '../product';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  carrello : Prodotti[] = this.servizioCarrello.getCarrello();
  totaleCarrello : number;
  constructor(private servizioCarrello : CarrelloServiceService) { 
    this.servizioCarrello.aggiornaCarrelloAddEvent.subscribe((carrelloAggiornato)=>
    {this.carrello = carrelloAggiornato;
      this.totaleCarrello =  this.carrello.reduce((a,b)=>{return a+b.prezzo},0)
    });
  }

  ngOnInit(): void {
    this.totaleCarrello =  this.carrello.reduce((a,b)=>{return a+b.prezzo},0)
  }

  rimuoviDaCarrello(i : number){
    this.servizioCarrello.rimuoviDaCarrello(i);
  }
}
