import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'generic-list',
    template: `<div class="container">
                  <div class="row">
                      <div *ngFor="let header of headers" [ngClass]="['col-md-' + header.columns]">
                          {{header.label}}
                      </div>
                  </div>
                  <div *ngFor="let element of list">
                      <generic-row [element]="element"
                                   [listAttr]="listAttr"
                                   [actions]="actions">
                      </generic-row>
                  </div>
               </div>`
})
export class GenericListComponent {
    @Input() list: any;
    @Input() headers: any[]; // Headers of the list: Format {columns: ..., label: ..., key: ...}
    @Input() listAttr: any[]; // Name of the element attributes to display:  Format {columns: ..., attrName: ..., key: ...}
    @Input() actions: any[];

    //@Output() deleteSL = new EventEmitter();

}
