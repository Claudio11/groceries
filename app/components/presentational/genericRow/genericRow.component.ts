import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'generic-row',
    template: `<div class="row">
                    <div *ngFor="let attr of listAttr" [ngClass]="['col-md-' + attr.columns]">
                        {{element[attr.attrName]}}
                    </div>
                    <div [ngClass]="['col-md-' + actionData.layout.columns]">
                        <action-list [actionData]="actionData"
                                     (manageAction)="manageElementOnAction($event)">
                        </action-list>
                    </div>
               </div>`
})
export class GenericRowComponent {
    @Input() element: any;
    @Input() listAttr: any[];
    @Input() actionData: any[];

    @Output() manageAction = new EventEmitter();

    /**
     *  Emits the manage action from the parent component (adding the element).
     *
     *  @param Key related to an action.
     */
     manageElementOnAction (key: any) {
         this.manageAction.emit({key: key, args: [this.element]});
     }
}
