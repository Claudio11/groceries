export class Item {

    _description: string;

    get description () : string {
      return this._description;
    }

    set description (description: string) {
      this._description = description;
    }

    constructor (obj: any);
    constructor(description: string)
    constructor(descriptionOrObj: string | any) {
        if (typeof descriptionOrObj === 'string') {
            this.description = description;
        }
        else {
            this.description = descriptionOrObj.description;
        }
    }

}
