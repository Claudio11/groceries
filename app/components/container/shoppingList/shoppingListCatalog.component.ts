import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Item } from '../../../models/item.model';
import { Task } from '../../../models/task.model';
import { ShoppingList } from '../../../models/shoppingList.model';

import { ShoppingListService } from '../../../services/shoppingList.service';

@Component({
    selector: 'shopping-list-catalog',
    template: `
                Shopping list detail...
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
        this.shoppingListService.subscribeToList();
        this.shoppingListService.shoppingList$.subscribe( shoppingList => {
            this.shoppingListCatalog = shoppingList;
            console.info('this.shoppingListCatalog', this.shoppingListCatalog)
        });

        setTimeout(() => {
          this.shoppingListService.aa();
        }, 4000)
    }

}
