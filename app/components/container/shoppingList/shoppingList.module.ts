import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingListDetailComponent } from './shoppingListDetail.component';
import { ShoppingListCatalogComponent } from './shoppingListCatalog.component';
import { TaskListComponent } from '../../presentational/taskList/taskList.component';
import { TaskRowComponent } from '../../presentational/taskRow/taskRow.component';

import { ShoppingListRoutingModule } from './shoppingList.routes';

@NgModule({
  imports: [
       BrowserModule,
       ShoppingListRoutingModule
  ],
  declarations: [
       ShoppingListDetailComponent,
       ShoppingListCatalogComponent,
       TaskListComponent,
       TaskRowComponent
  ],
  providers: [
    // HeroService
  ]
})

export class ShoppingListModule { }
