import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'generic-row',
    template: `<div class="row">
                    <div *ngFor="let attr of listAttr" [ngClass]="['col-md-' + attr.columns]">
                        {{element[attr.attrName]}}
                    </div>
               </div>`
})
export class GenericRowComponent {
    @Input() element: any;
    @Input() listAttr: any[];

    //@Output() taskDeleted = new EventEmitter();

}
