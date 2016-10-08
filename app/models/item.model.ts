export class Item {

    _description: string;

    get description () : string {
      return this._description;
    }

    set description (description: string) {
      this._description = description;
    }

    constructor(description: string) {
        this.description = description;
    }

}
