import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionListModule } from '../actionList/actionList.module';

import { GenericRowComponent } from './genericRow.component';

@NgModule({
  imports: [ CommonModule, ActionListModule ],
  declarations: [ GenericRowComponent ],
  exports: [ GenericRowComponent ]
})

export class GenericRowModule { }
