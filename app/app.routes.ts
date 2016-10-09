import { NgModule, ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListRoutingModule } from './components/container/shoppingList/shoppingList.routes';

import { ShoppingListDetailComponent } from './components/container/shoppingList/shoppingListDetail.component';

@NgModule({
  imports: [
      RouterModule.forRoot([

      ])
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}
