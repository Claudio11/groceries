import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingListDetailComponent } from './shoppingListDetail.component';
import { ShoppingListCatalogComponent } from './shoppingListCatalog.component';

import { ShoppingListRoutingModule } from './shoppingList.routes';

@NgModule({
  imports: [ BrowserModule,
             ShoppingListRoutingModule],
  declarations: [
      // ShoppingListDetailComponent,
      // ShoppingListCatalogComponent
  ],
  providers: [
    // HeroService
  ]
})

export class ShoppingListModule { }
