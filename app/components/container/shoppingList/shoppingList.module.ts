import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GenericListModule } from '../../presentational/genericList/genericList.module';

import { ShoppingListDetailComponent } from './shoppingListDetail.component';
import { ShoppingListCatalogComponent } from './shoppingListCatalog.component';
import { TaskListComponent } from '../../presentational/taskList/taskList.component';
import { TaskRowComponent } from '../../presentational/taskRow/taskRow.component';

import { ShoppingListRoutingModule } from './shoppingList.routes';
import { HttpShoppingListService } from '../../../services/httpServices/httpShoppingList.service';
import { ActionManagerService } from '../../presentational/actionList/services/actionManager.service';


@NgModule({
  imports: [
       BrowserModule,
       ShoppingListRoutingModule,
       GenericListModule
  ],
  declarations: [
       ShoppingListDetailComponent,
       ShoppingListCatalogComponent,
       TaskListComponent,
       TaskRowComponent
  ],
  providers: [
      HttpShoppingListService,
      ActionManagerService
  ]
})

export class ShoppingListModule { }
