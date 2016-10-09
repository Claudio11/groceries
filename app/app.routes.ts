import { NgModule, ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListRoutingModule } from './components/container/shoppingList/shoppingList.routes';

import { ShoppingListDetailComponent } from './components/container/shoppingList/shoppingListDetail.component';

// Route Configuration
// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/shoppingList',
//     pathMatch: 'full'
//   },
//   { path: 'shoppingList', component: ShoppingListDetailComponent }, // Put list of shoppingList here later
// ];
//
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

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
