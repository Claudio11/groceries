import { NgModule, ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListRoutingModule } from './components/container/shoppingList/shoppingList.routes';

import { ShoppingListDetailComponent } from './components/container/shoppingList/shoppingListDetail.component';

@NgModule({
  imports: [
      RouterModule.forRoot([
        {
            path: '',
            redirectTo: '/shoppingList',
            pathMatch: 'full'
        },
      ])
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}
