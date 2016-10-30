import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GenericRowComponent } from './genericRow.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ GenericRowComponent ],
  exports: [ GenericRowComponent ]
})

export class GenericRowModule { }
