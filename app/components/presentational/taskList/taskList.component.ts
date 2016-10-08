import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../../models/task.model';
import { TaskList } from '../../../models/taskList.model';

@Component({
    selector: 'task-list',
    template: `
                <div>TaskList </div>
                <ul *ngIf="taskListItem.tasks && taskListItem.tasks.length">
                    <li *ngFor="let task of taskListItem.tasks">
                        <task-row [task]="task" (taskDeleted)="taskDeleted(task)"></task-row>
                    </li>
                <ul>
                <div *ngIf="!taskListItem.tasks || !taskListItem.tasks.length">
                    No tasks in the list.
                </div>
              `
})
export class TaskListComponent {
    @Input() taskListItem: TaskList;

    taskDeleted (task: Task) {
        console.info('task', task);
        console.info('this.taskListItem', this.taskListItem);
        var index = this.taskListItem.tasks.indexOf(task);
        this.taskListItem.tasks.splice(index, 1);
    }
}
