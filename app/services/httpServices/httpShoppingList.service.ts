import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpService } from './http.service';
import { ShoppingList } from '../../models/shoppingList.model';


@Injectable()
export class HttpShoppingListService extends HttpService <ShoppingList> {

    constructor(http: Http) {
        super(http);
        this.entityUrl = 'shoppingList';
    }

}
