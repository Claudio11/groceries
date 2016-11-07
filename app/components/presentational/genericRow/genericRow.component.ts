import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'generic-row',
    template: `<div class="row">
                    <div *ngFor="let attr of listAttr" [ngClass]="['col-md-' + attr.columns]">
                        {{element[attr.attrName]}}
                    </div>
                    <div [ngClass]="['col-md-' + actions.columns]">
                        <div *ngFor="let action of actions.actions" (click)="executeCb(action.cb)">
                            {{action.img}}
                        </div>
                    </div>
               </div>`
})
export class GenericRowComponent {
    @Input() element: any;
    @Input() listAttr: any[];
    @Input() actions: any[];


    @Output() deleteSL = new EventEmitter();

    executeCb (cb: any) {
        console.info('cb', cb);
        console.info('element', this.element);
        // this.deleteSL.emit();
    }

}
