import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GenericRowModule } from '../genericRow/genericRow.module';

import { GenericListComponent } from './genericList.component';

@NgModule({
  imports: [ BrowserModule, GenericRowModule ],
  declarations: [ GenericListComponent ],
  exports: [ GenericListComponent ]
})

export class GenericListModule { }
