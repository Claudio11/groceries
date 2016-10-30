export class DbEntity {

    _id: string;

    get id () : string {
      return this._id;
    }

    set id (id: string) {
      this._id = id;
    }

    constructor(obj: any) {
        if (typeof obj === 'object') {
            this.id = obj._id;
        }
    }

}
