import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ActionManagerService {

    private _actionMap: any;    // Object with the key of the action and the callback for it.
    // TODO: Create logic for this using observable.


    get actionMap () : any {
        return this._actionMap;
    }

    set actionMap (actionMap: any) {
        this._actionMap = actionMap;
    }

    /**
     *  Creates the action map from a json, (being the key a string to identify the action,
     *  and the value the callback to be executed).
     *
     *  @param Actions json, format: [{key: ..., label: ..., imgPath: ..., cb: ...}].
     */
    createActionMap (actionsJson: any[]) {
        this.actionMap = {};
        for (let i in actionsJson) {
            let currentAction = actionsJson[i];
            this.actionMap[currentAction.key] = currentAction.cb;
        }
    }

    /**
     *  Executes the callback related to the given key.
     *
     *  @param actionKey Action key (for example: "delete", "edit", etc).
     *  @param args Arguments to pass to the callback (format: [arg1, arg2, ...]).
     */
    executeAction (actionKey: string, args: any[]) {
        if (actionKey && this.actionMap && this.actionMap[actionKey]) {
            this.actionMap[actionKey].apply(null, args);
        }
    }

    constructor() {

    }

}
