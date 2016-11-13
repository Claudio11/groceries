import { Component, Input, Output, EventEmitter  } from '@angular/core';

//import { ActionManagerService } from './services/actionManager.service';

@Component({
    selector: 'action-list',
    template: `<div class="actions-container" *ngIf="actionData && actionData.actions">
                      <div *ngFor="let action of actionData.actions">
                          <div (click)="manageAction.emit(action.key)" title="{{action.label}}">
                                {{action.imgPath}}
                          </div>
                      </div>
               </div>`
})
export class ActionListComponent {
    @Input() actionData: any[]; // Format: [{key: ..., label: ..., imgPath: ..., cb: ...}]. TODO: add event that triggers the cb.

    @Output() manageAction = new EventEmitter();

    constructor () {

    }
}
