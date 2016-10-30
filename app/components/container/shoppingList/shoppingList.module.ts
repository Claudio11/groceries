import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingListDetailComponent } from './shoppingListDetail.component';
import { ShoppingListCatalogComponent } from './shoppingListCatalog.component';
import { TaskListComponent } from '../../presentational/taskList/taskList.component';
import { TaskRowComponent } from '../../presentational/taskRow/taskRow.component';
import { GenericListComponent } from '../../presentational/genericList/genericList.component';
import { GenericRowComponent } from '../../presentational/genericRow/genericRow.component';

import { ShoppingListRoutingModule } from './shoppingList.routes';
import { HttpShoppingListService } from '../../../services/httpServices/httpShoppingList.service'

@NgModule({
  imports: [
       BrowserModule,
       ShoppingListRoutingModule
  ],
  declarations: [
       ShoppingListDetailComponent,
       ShoppingListCatalogComponent,
       TaskListComponent,
       TaskRowComponent,
       GenericListComponent,
       GenericRowComponent
  ],
  providers: [
      HttpShoppingListService
  ]
})

export class ShoppingListModule { }
