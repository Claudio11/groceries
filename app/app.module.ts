import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ShoppingListModule }  from './components/container/shoppingList/shoppingList.module';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routes';

// TODO: Make modules for each page, research best approach for modules separation.

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             ShoppingListModule,
             AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
