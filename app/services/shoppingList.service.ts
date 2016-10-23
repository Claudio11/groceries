import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { ShoppingList } from '../models/shoppingList.model';
import { HttpShoppingListService } from './httpServices/httpShoppingList.service';

@Injectable()
export class ShoppingListService {

    private _currentShoppingList: ShoppingList;
    private _shoppingListCatalog: ShoppingList[];

    private shoppingListSource = new Subject<ShoppingList[]>();
    public shoppingList$ = this.shoppingListSource.asObservable();

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

    subscribeToList () {
        this.httpService.get();
        this.httpService.list$.subscribe( (result: any) => {
            this.shoppingListSource.next(result);
        }, (error: any) => {
            console.log('Could not load shopping lists')
        });
    }

    aa() {
       this.httpService.aa();
    }

    constructor(private httpService: HttpShoppingListService) {

    }

}
