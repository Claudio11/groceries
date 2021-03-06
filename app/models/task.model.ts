import { Item } from './item.model';

export class Task {

    _active: boolean;
    _quantity: number;
    _item: Item;

    get item (): Item {
      return this._item;
    }

    set item (item: Item) {
      this._item = item;
    }

    get quantity (): number {
      return this._quantity;
    }

    set quantity (quantity: number) {
      this._quantity = quantity;
    }

    get active (): boolean {
      return this._active;
    }

    set active (active: boolean) {
      this._active = active;
    }

    constructor(obj: any);
    constructor(item: Item, active: boolean, quantity: number)
    constructor(itemOrObj: Item | any, active?: boolean, quantity?: number) {
        if (itemOrObj instanceof Item) {
            this.item = itemOrObj;
            this.active = active;
            this.quantity = quantity;
        }
        else {
            this.item = new Item(itemOrObj.item);
            this.active = itemOrObj.active;
            this.quantity = itemOrObj.quantity;
        }

    }

}
