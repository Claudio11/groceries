import { Component, OnInit } from '@angular/core';

import { Item } from './models/item.model';
import { Task } from './models/task.model';
import { TaskList } from './models/taskList.model';

@Component({
    selector: 'my-app',
    template: '<list-container [taskListItem]="taskList"></list-container>'
})
export class AppComponent {
    taskList: TaskList;

    ngOnInit () {
        let item: Item = new Item('Item description.');
        let task: Task = new Task(item, false);

        let item2: Item = new Item('Coca cola');
        let task2: Task = new Task(item2, true, 2);

        this.taskList = new TaskList('NameT', 'DescT', [task, task2]);
    }
}
