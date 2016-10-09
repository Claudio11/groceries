import { Component, OnInit } from '@angular/core';

import { Item } from '../../../models/item.model';
import { Task } from '../../../models/task.model';
import { ShoppingList } from '../../../models/shoppingList.model';

@Component({
    selector: 'shopping-list-catalog',
    template: `
                Shopping list detail...
                <ul>
                    <li *ngFor="let shoppingList of shoppingListCatalog">
                        {{shoppingList.description}}
                    </li>
                </ul>
              `
})
export class ShoppingListCatalogComponent {
    shoppingListCatalog: ShoppingList[];

    ngOnInit() {
        let item: Item = new Item('Item description.');
        let task: Task = new Task(item, false);

        let item2: Item = new Item('Coca cola');
        let task2: Task = new Task(item2, true, 2);

        let item10: Item = new Item('Item description 2');
        let task10: Task = new Task(item10, false);

        let item11: Item = new Item('Pepsi cola');
        let task11: Task = new Task(item11, true, 3);

        this.shoppingListCatalog = [new ShoppingList('ShoppingList 2', 'Desc sl1', [task, task2]),
                                    new ShoppingList('ShoppingList 2', 'Desc sl2', [task10, task11])];
    }
}
