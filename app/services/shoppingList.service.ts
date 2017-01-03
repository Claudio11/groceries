import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { ShoppingList } from '../models/shoppingList.model';
import { HttpShoppingListService } from './httpServices/httpShoppingList.service';

@Injectable()
export class ShoppingListService {

    private _currentShoppingList: ShoppingList;
    private _list: ShoppingList[];

    private entitySource = new Subject<ShoppingList>();
    private listSource = new Subject<ShoppingList[]>();

    public entity$ = this.entitySource.asObservable();
    public list$ = this.listSource.asObservable();

    get currentShoppingList () : ShoppingList {
        return this._currentShoppingList;
    }

    set currentShoppingList (currentShoppingList: ShoppingList) {
        this._currentShoppingList = currentShoppingList;
    }

    get list () : ShoppingList[] {
        return this._list;
    }

    set list (list: ShoppingList[]) {
        this._list = list;
    }


    /**
     *  Set the current list with the given options.
     *
     *  @param Options to filter/limit data.
     */
    setCurrentList (options?: any) {
        this.httpService.get().subscribe( (result: any) => {
            this.list = [];
            for (var i in result) {
                this.list.push(new ShoppingList(result[i]));  // Needed if we handle the list locally (is needed?, research).
            }
            this.listSource.next(this.list);
        }, (error: any) => {
            console.log('Could not load shopping lists');
        });
    }

    /**
     *  Set current entity
     *
     *  @param Id of the entity.
     */
    setCurrentEntity (id: string) {
        this.httpService.get(id).subscribe( (result: any) => {
            this.currentShoppingList = new ShoppingList(result);  // Needed if we handle the entity locally (is needed?, research).
            this.entitySource.next(this.currentShoppingList);
        }, (error: any) => {
            console.log('Could not load shopping')
        });
    }

    /**
     *  Deletes the entity passed by parameter.
     */
    delete (sl: ShoppingList) {
        if (sl && sl.id) {
            this.httpService.delete(sl.id);
        }
    }

    fakeSearch () {
        let tempSl = this.list[0];
        this.list = [];
        this.list.push(tempSl);
        this.listSource.next(this.list);
    }

    constructor(private httpService: HttpShoppingListService) {

    }

}
