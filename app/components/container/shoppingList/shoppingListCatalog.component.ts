import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Item } from '../../../models/item.model';
import { Task } from '../../../models/task.model';
import { ShoppingList } from '../../../models/shoppingList.model';

import { ShoppingListService } from '../../../services/shoppingList.service';

@Component({
    selector: 'shopping-list-catalog',
    template: `
                Shopping list catalog...
                <ul>
                    <li *ngFor="let shoppingList of shoppingListCatalog">
                        <a href="shoppingList/{{shoppingList.id}}">{{shoppingList.description}}</a>
                    </li>
                </ul>

                <generic-list [headers]="slHeaders"
                              [list]="shoppingListCatalog"
                              [listAttr]="slAttrs">
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

    constructor (private shoppingListService: ShoppingListService) {
        this.shoppingListService.observeList();

        this.shoppingListService.list$.subscribe( list => {
            this.shoppingListCatalog = list;
        });
    }

}
