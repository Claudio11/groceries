import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRowModule } from '../genericRow/genericRow.module';

import { GenericListComponent } from './genericList.component';

@NgModule({
  imports: [ CommonModule, GenericRowModule ],
  declarations: [ GenericListComponent ],
  exports: [ GenericListComponent ]
})

export class GenericListModule { }
