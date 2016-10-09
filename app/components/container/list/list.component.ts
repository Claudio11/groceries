import { Component, OnInit } from '@angular/core';

import { Item } from '../../../models/item.model';
import { Task } from '../../../models/task.model';
import { TaskList } from '../../../models/taskList.model';

@Component({
    selector: 'list-container',
    template: '<task-list [taskListItem]="taskList"></task-list>'
})
export class ListComponent {
    taskList: TaskList;

    ngOnInit() {
        let item: Item = new Item('Item description.');
        let task: Task = new Task(item, false);

        let item2: Item = new Item('Coca cola');
        let task2: Task = new Task(item2, true, 2);

        this.taskList = new TaskList('NameT', 'DescT', [task, task2]);
    }
}
