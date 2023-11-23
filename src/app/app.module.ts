import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { PanierListComponent } from './panier-list/panier-list.component';
import { PanierComponent } from './panier/panier.component';
import { PanierState } from './panier/PanierState';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductSearchComponent, 
    PanierListComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot([PanierState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
