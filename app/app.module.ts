import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ListComponent } from './components/container/list/list.component';

import { TaskListComponent } from './components/presentational/taskList/taskList.component';
import { TaskRowComponent } from './components/presentational/taskRow/taskRow.component';

// TODO: Make modules for each page, research best approach for modules separation.

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListComponent, TaskListComponent, TaskRowComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
