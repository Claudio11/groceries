import { Component, Input, Output, EventEmitter  } from '@angular/core';

import { Task } from '../../../models/task.model';

@Component({
    selector: 'task-row',
    template: `<div>
                  <div>{{task.item.description}}</div>
                  <div (click)="deleteTask()">x</div>
               </div>`
})
export class TaskRowComponent {
    @Input() task: Task;
    @Output() taskDeleted = new EventEmitter();

    deleteTask () {
        this.taskDeleted.emit(this.task);
    }
}
