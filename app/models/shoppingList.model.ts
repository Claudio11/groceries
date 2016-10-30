import { Task } from './task.model';
import { DbEntity } from './dbEntity.model';

export class ShoppingList extends DbEntity{

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

    constructor(obj: any);
    constructor(name: string, description: string, tasks: any[])
    constructor(nameOrJson: any | string, description?: string, tasks?: any[]) {
        super(nameOrJson);
        this.tasks = [];
        if (typeof nameOrJson === 'string') {
            this.name = nameOrJson;
            this.description = description;
            for (let i=0; i<tasks.length; i++) {
                this.tasks.push(new Task(tasks[i]))
            }
        }
        else {
            this.name = nameOrJson.name;
            this.description = nameOrJson.description;
            for (let i=0; i<nameOrJson.tasks.length; i++) {
                this.tasks.push(new Task(nameOrJson.tasks[i]))
            }
        }
    }

}
