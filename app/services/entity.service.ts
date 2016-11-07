import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { ShoppingList } from '../models/shoppingList.model';
import { HttpShoppingListService } from './httpServices/httpShoppingList.service';

@Injectable()
export class EntityService {

    // private EntityClass: any;  // Class for this service (to be overriden by child).
    // private EntityHttpService: any;  // Http service for this service.
    //
    // private _entity: EntityClass;
    // private _list: EntityClass[];
    //
    // private entitySource = new Subject<EntityClass>();
    // private listSource = new Subject<EntityClass[]>();
    //
    // public entity$ = this.entitySource.asObservable();
    // public list$ = this.listSource.asObservable();
    //
    // get currentEntity () : ShoppingList {
    //     return this._entity;
    // }
    //
    // set currentEntity (currentEntity: ShoppingList) {
    //     this._currentEntity = currentEntity;
    // }
    //
    // get list () : ShoppingList[] {
    //     return this._list;
    // }
    //
    // set list (list: ShoppingList[]) {
    //     this._list = list;
    // }
    //
    // /**
    //  *  Observe the list from the http service
    //  */
    // observeList () {
    //     this.httpService.get();
    //     this.httpService.list$.subscribe( (result: any) => {
    //         this.list = [];
    //         for (var i in result) {
    //             this.list.push(new EntityClass(result[i]));  // Needed if we handle the list locally (is needed?, research).
    //         }
    //         this.listSource.next(this.list);
    //     }, (error: any) => {
    //         console.log('Could not load shopping lists');
    //     });
    // }
    //
    // /**
    //  *  Observe the entity from the http service
    //  */
    // observeEntity (id: string) {
    //     this.httpService.get(id);
    //     this.httpService.entity$.subscribe( (result: any) => {
    //         this.currentEntity = new EntityClass(result);  // Needed if we handle the entity locally (is needed?, research).
    //         this.entitySource.next(this.currentEntity);
    //     }, (error: any) => {
    //         console.log('Could not load entity')
    //     });
    // }

    constructor() {

    }

}
