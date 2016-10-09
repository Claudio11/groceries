import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ShoppingListRoutes } from './components/container/shoppingList/shoppingList.routes';
// import { DogListComponent } from './dogs/dog-list.component';
import { ShoppingListDetailComponent } from './components/container/shoppingList/shoppingListDetail.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/shoppingList',
    pathMatch: 'full'
  },
  { path: 'shoppingList', component: ShoppingListDetailComponent }, // Put list of shoppingList here later
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
