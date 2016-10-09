import { Task } from './task.model';

export class ShoppingList {

    _description: string;
    _name: string;
    _tasks: Task[];

    get description () : string {
      return this._description;
    }

    set description (description: string) {
      this._description = description;
    }

    get name () : string {
      return this._name;
    }

    set name (name: string) {
      this._name = name;
    }

    get tasks () : Task[] {
      return this._tasks;
    }

    set tasks (tasks: Task[]) {
      this._tasks = tasks;
    }

    constructor(name: string, description: string, tasks: Task[]) {
        this.name = name;
        this.description = description;
        this.tasks = tasks;
    }

}
