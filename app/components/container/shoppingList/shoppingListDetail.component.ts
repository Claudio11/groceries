import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item } from '../../../models/item.model';
import { Task } from '../../../models/task.model';
import { ShoppingList } from '../../../models/shoppingList.model';

import { ShoppingListService } from '../../../services/shoppingList.service';

@Component({
    selector: 'shopping-list-detail',
    template: `
                Shopping list detail...
                <task-list [shoppingList]="shoppingList"></task-list>
              `,
    providers: [
          ShoppingListService
    ]
})
export class ShoppingListDetailComponent {
    shoppingList: ShoppingList;

    constructor (private route: ActivatedRoute, private shoppingListService: ShoppingListService) {

    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.shoppingListService.observeEntity(id);

                this.shoppingListService.entity$.subscribe( entity => {
                    this.shoppingList = entity;
                });
            });
    }
}
