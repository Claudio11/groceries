import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShoppingListModule }  from './components/container/shoppingList/shoppingList.module';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routes';

// TODO: Make modules for each page, research best approach for modules separation (egghead io "Manage UI State with the Angular 2 Router").

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             ShoppingListModule,
             AppRoutingModule,
             HttpModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
