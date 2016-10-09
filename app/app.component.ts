import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    //template: '<list-container [taskListItem]="taskList"></list-container>'
    template: `
                <div class="container">
                    <router-outlet></router-outlet>
                </div>
              `
})
export class AppComponent {

    ngOnInit () {

    }
}
