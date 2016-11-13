import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionListComponent } from './actionList.component';
//import { ActionsManagerService } from '../../../services/actionsManager.module';

@NgModule({
      imports: [ CommonModule ],
      declarations: [ ActionListComponent ],
      exports: [ ActionListComponent ]
})

export class ActionListModule { }
