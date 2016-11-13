import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionListComponent } from './actionList.component';
import { ActionManagerService } from './services/actionManager.service';

@NgModule({
      imports: [ CommonModule ],
      declarations: [ ActionListComponent ],
      exports: [ ActionListComponent ]
})

export class ActionListModule { }

export {
    ActionManagerService
}
