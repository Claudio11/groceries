import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { ShoppingList } from '../../models/shoppingList.model';


@Injectable()
export class HttpShoppingListService extends HttpService <ShoppingList> {

    constructor() {
        super();
        this.entityUrl = 'shoppingList';
    }

}
