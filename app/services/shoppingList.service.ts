import { ShoppingList } from '../models/shoppingList.model';

export class ShoppingListService {

    _currentShoppingList: ShoppingList;
    _shoppingListCatalog: ShoppingList[];

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

    constructor() {

    }

}
