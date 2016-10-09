import { Component, OnInit } from '@angular/core';

import { Item } from '../../../models/item.model';
import { Task } from '../../../models/task.model';
import { ShoppingList } from '../../../models/shoppingList.model';

@Component({
    selector: 'shopping-list-detail',
    template: `
                Shopping list detail...
                <task-list [shoppingList]="shoppingList"></task-list>
              `
})
export class ShoppingListDetailComponent {
    shoppingList: ShoppingList;

    ngOnInit() {
        let item: Item = new Item('Item description.');
        let task: Task = new Task(item, false);

        let item2: Item = new Item('Coca cola');
        let task2: Task = new Task(item2, true, 2);

        this.shoppingList = new ShoppingList('NameT', 'DescT', [task, task2]);
    }
}
