import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService <T> {

    protected _endpoint: string = 'http://localhost:4000/api';  // TODO: Get it from constants.
    protected _entityUrl: string; // To be overriden by child classes.

    get entityUrl () : string {
      return this._entityUrl;
    }

    set entityUrl (entityUrl: string) {
      this._entityUrl = entityUrl;
    }

    /**
     *  Returns the url for the entity
     *
     *  @param Id of the resource (if getting an specific record, undefined if getting the list).
     *
     *  @return The url for the entity.
     */
    getUrl (id: string) : string {
        let resourceDetailUrl = (id) ? '/' + id : '';
        return this._endpoint + '/' + this.entityUrl + resourceDetailUrl;
    }

    /**
     *  GET for entities.
     *
     *  @param Id of the resource (if getting an specific record, undefined if getting the list).
     */
    get(id?: string) {
        return this.http.get(this.getUrl(id)).map((response: Response) => response.json());
    }

    /**
     *  DELETE for entities.
     *
     *  @param Id of the resource to delete.
     */
    delete(id: string) {
        this.http.delete(this.getUrl(id)).subscribe();
    }

    constructor(public http: Http) {

    }

}
