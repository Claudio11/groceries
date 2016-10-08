import { Component, Input, OnInit } from '@angular/core';

import { TaskList } from '../../../models/taskList.model';

@Component({
    selector: 'list-container',
    template: '<task-list [taskListItem]="taskListItem"></task-list>'
})
export class ListComponent {
    @Input() taskListItem: TaskList;

    ngOnInit() {

    }
}
