import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './carrello/carrello.component';
import { FormNuovoProdottoComponent } from './form-nuovo-prodotto/form-nuovo-prodotto.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch: "full"},
  {path: "product-list", component:ProductListComponent },
  {path: "product-detail", component:ProductDetailComponent },
  {path: "carrello", component:CarrelloComponent },
  {path: "lista-utenti", component:UserListComponent},
  {path: "home", component:HomeComponent},
  {path: "form-nuovo-prodotto" , component:FormNuovoProdottoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
