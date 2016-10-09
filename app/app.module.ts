import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ShoppingListModule }  from './components/container/shoppingList/shoppingList.module';

import { AppComponent }  from './app.component';
import { ShoppingListCatalogComponent } from './components/container/shoppingList/shoppingListCatalog.component';
import { ShoppingListDetailComponent } from './components/container/shoppingList/shoppingListDetail.component';

import { TaskListComponent } from './components/presentational/taskList/taskList.component';
import { TaskRowComponent } from './components/presentational/taskRow/taskRow.component';

import { AppRoutingModule }  from './app.routes';

// TODO: Make modules for each page, research best approach for modules separation.

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             ShoppingListModule,
             AppRoutingModule ],
  declarations: [ AppComponent,
                  ShoppingListCatalogComponent,
                  ShoppingListDetailComponent,
                  TaskListComponent,
                  TaskRowComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
