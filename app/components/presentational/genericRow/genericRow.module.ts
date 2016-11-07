import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericRowComponent } from './genericRow.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ GenericRowComponent ],
  exports: [ GenericRowComponent ]
})

export class GenericRowModule { }
