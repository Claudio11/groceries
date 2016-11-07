import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { ShoppingList } from '../../../models/shoppingList.model';

import { ShoppingListService } from '../../../services/shoppingList.service';

@Component({
    selector: 'shopping-list-catalog',
    template: `
                Shopping list catalog...
                <ul>
                    <li *ngFor="let shoppingList of shoppingListCatalog">
                        <a href="shoppingList/{{shoppingList.id}}">{{shoppingList.description}}</a>
                        <div (click)="deleteSL(shoppingList)">x</div>
                    </li>
                </ul>

                <generic-list [headers]="slHeaders"
                              [list]="shoppingListCatalog"
                              [listAttr]="slAttrs"
                              [actions]="slActions"
                              (deleteSL)="deleteSL()">
                </generic-list>
              `,
    providers: [
          ShoppingListService
    ]
})

@Injectable()
export class ShoppingListCatalogComponent {
    shoppingListCatalog: ShoppingList[];
    slHeaders: any[] = [{label: 'Id', columns: 3}, {label: 'Description', columns: 4}, {label: 'Name', columns: 3}, {label: 'Actions', columns: 2}];
    slAttrs: any[] = [{attrName: 'id', columns: 3}, {attrName: 'description', columns: 4}, {attrName: 'name', columns: 3}];
    slActions: any = {columns: 2, actions: [{img: 'deleteImgPath', cb: 'deleteSL'}]}

    constructor (private shoppingListService: ShoppingListService) {
        this.shoppingListService.observeList();

        this.shoppingListService.list$.subscribe( list => {
            this.shoppingListCatalog = list;
        });
    }

    deleteSL (shoppingList: ShoppingList) {
        console.info('delete from container component', shoppingList);
        this.shoppingListService.delete(shoppingList.id);
    }

}
