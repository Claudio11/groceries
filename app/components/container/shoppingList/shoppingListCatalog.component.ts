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
                        {{shoppingList.description}}
                    </li>
                </ul>
              `,
    providers: [
          ShoppingListService
    ]
})

@Injectable()
export class ShoppingListCatalogComponent {
    shoppingListCatalog: ShoppingList[];

    constructor (private shoppingListService: ShoppingListService) {
        this.shoppingListService.observeList();

        this.shoppingListService.list$.subscribe( list => {
            this.shoppingListCatalog = list;
        });
    }

}
