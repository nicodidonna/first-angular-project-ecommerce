import { Component, OnInit } from '@angular/core';
import { CarrelloServiceService } from '../carrello-service.service';
import { Prodotti } from '../product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  carrello : Prodotti[] = [];
  
  constructor(private servizioCarrello : CarrelloServiceService) { 
    this.servizioCarrello.aggiornaCarrelloAddEvent.subscribe((carrelloAggiornato)=> this.carrello = carrelloAggiornato);
  }

  ngOnInit(): void {
  }

  
    svuotaCarrello(){
      this.servizioCarrello.svuotaCarrello();
    }
    
}
