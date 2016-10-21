import { Injectable } from '@angular/core';

import { ShoppingList } from '../models/shoppingList.model';
import { HttpShoppingListService } from './httpServices/httpShoppingList.service';

@Injectable()
export class ShoppingListService {

    private _currentShoppingList: ShoppingList;
    private _shoppingListCatalog: ShoppingList[];

    get currentShoppingList () : ShoppingList {
        return this._currentShoppingList;
    }

    set currentShoppingList (currentShoppingList: ShoppingList) {
        this._currentShoppingList = currentShoppingList;
    }

    get shoppingListCatalog () : ShoppingList[] {
        return this._shoppingListCatalog;
    }

    set shoppingListCatalog (shoppingListCatalog: ShoppingList[]) {
        this._shoppingListCatalog = shoppingListCatalog;
    }

    loadCatalog () {
        this.httpService.get().subscribe( (result: any) => {
            //this.currentShoppingList = result.json();
            console.info('this.currentShoppingList', result);
        }, (error: any) => {
            console.log('Could not load shopping lists')
        });
    }

    constructor(private httpService: HttpShoppingListService) {

    }

}
