import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ShoppingList } from '../../../models/shoppingList.model';
import { ShoppingListService } from '../../../services/shoppingList.service';
import { ActionManagerService } from '../../presentational/actionList/actionList.module';

@Component({
    selector: 'shopping-list-catalog',
    template: `
                Shopping list catalog...
                <ul>
                    <li *ngFor="let shoppingList of shoppingListCatalog">
                        <a href="shoppingList/{{shoppingList.id}}">{{shoppingList.description}}</a>
                    </li>
                </ul>

                <input type="text" (input)="searchTerm$.next($event.target.value)">

                <generic-list [headers]="slHeaders"
                              [list]="shoppingListCatalog"
                              [listAttr]="slAttrs"
                              [actionData]="slActionData"
                              (manageAction)="manageAction($event)">
                </generic-list>
              `,
    providers: [
          ShoppingListService
    ]
})

@Injectable()
export class ShoppingListCatalogComponent {

    searchTerm$ = new Subject<string>();
    shoppingListCatalog: ShoppingList[];
    slHeaders: any[] = [
                        {label: 'Id', columns: 3},
                        {label: 'Description', columns: 4},
                        {label: 'Name', columns: 3},
                        {label: 'Actions', columns: 2}
                       ];

    slAttrs: any[] = [
                      {attrName: 'id', columns: 3},
                      {attrName: 'description', columns: 4},
                      {attrName: 'name', columns: 3}
                     ];

    slActionData: any = {
                            layout: {columns: 2},
                            actions: [
                             {key: 'deleteSL', label: 'Delete', imgPath: 'deletePath', cb: this.deleteSL},
                             {key: 'editSl', label: 'Edit', imgPath: 'editPath', cb: this.editSL}
                            ]
                       };

    constructor (private shoppingListService: ShoppingListService, private actionManagerService: ActionManagerService) {
        this.shoppingListService.setCurrentList();
        this.shoppingListService.list$.subscribe( list => {
            this.shoppingListCatalog = list;
        });

        this.actionManagerService.createActionMap(this.slActionData.actions);

        this.searchTerm$.subscribe( (searchTerm: string) => {
            this.shoppingListService.fakeSearch();
        });
    }

    deleteSL (sl: ShoppingList) {
        console.info('delete in container component, shopping list:', sl);
    }

    editSL (sl: ShoppingList) {
        console.info('edit in container component, shopping list:', sl);
    }

    manageAction (payload: any) {
        this.actionManagerService.executeAction(payload.key, payload.args);
    }

}
