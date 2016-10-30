import { DbEntity } from './dbEntity.model'

export class Item extends DbEntity {

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
        super(descriptionOrObj);
        if (typeof descriptionOrObj === 'string') {
            this.description = descriptionOrObj;
        }
        else {
            this.description = descriptionOrObj.description;
        }
    }

}
