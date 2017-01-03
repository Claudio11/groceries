import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShoppingListCatalogComponent } from './shoppingListCatalog.component';
import { ShoppingListDetailComponent } from './shoppingListDetail.component';

const slRoutes: Routes = [
  { path: 'shoppingList', component: ShoppingListCatalogComponent },
  { path: 'shoppingList/:id', component: ShoppingListDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(slRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ShoppingListRoutingModule { }
