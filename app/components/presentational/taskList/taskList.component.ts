import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../../models/task.model';
import { ShoppingList } from '../../../models/shoppingList.model';

@Component({
    selector: 'task-list',
    template: `
                <div>TaskList </div>
                <ul *ngIf="shoppingList && shoppingList.tasks && shoppingList.tasks.length">
                    <li *ngFor="let task of shoppingList.tasks">
                        <task-row [task]="task" (taskDeleted)="taskDeleted(task)"></task-row>
                    </li>
                <ul>
                <div *ngIf="!shoppingList || !shoppingList.tasks || !shoppingList.tasks.length">
                    No tasks in the list.
                </div>
              `
})
export class TaskListComponent {
    @Input() shoppingList: ShoppingList;

    taskDeleted (task: Task) {
        var index = this.shoppingList.tasks.indexOf(task);
        this.shoppingList.tasks.splice(index, 1);
    }
}
