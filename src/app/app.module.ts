import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CustomPipe } from './custom-pipe';
import { CarrelloComponent } from './carrello/carrello.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { FormNuovoProdottoComponent } from './form-nuovo-prodotto/form-nuovo-prodotto.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    CustomPipe,
    CarrelloComponent,
    UserListComponent,
    HomeComponent,
    FormNuovoProdottoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
