import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
        this.shoppingListService.entity$.subscribe( sl => {
            this.shoppingList = sl;
        });
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.shoppingListService.setCurrentEntity(id);
            });
    }
}
