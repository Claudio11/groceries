import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShoppingListCatalogComponent } from './shoppingListCatalog.component';
import { ShoppingListDetailComponent } from './shoppingListDetail.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'shoppingList', component: ShoppingListCatalogComponent },
      { path: 'shoppingList/:id', component: ShoppingListDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ShoppingListRoutingModule { }
