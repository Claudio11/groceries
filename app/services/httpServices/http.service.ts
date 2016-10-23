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

    private entitySource = new Subject<T>();
    private listSource = new Subject<T[]>();

    public entity$ = this.entitySource.asObservable();
    public list$ = this.listSource.asObservable();

    get entityUrl () : string {
      return this._entityUrl;
    }

    set entityUrl (entityUrl: string) {
      this._entityUrl = entityUrl;
    }

    /**
     *  Returns the url for the entity
     *
     *  @return The url for the entity.
     */
    getUrl () : string {
        return this._endpoint + '/' + this.entityUrl;
    }

    /**
     *  GET for entities.
     *
     *  @param Id of the resource (if getting an specific record, undefined if getting the list).
     */
    get(id?: string) {
        // TODO: Refactor this method.
        if (id) {
            this.http.get(this.getUrl() + '/' + id)
                .map((response: Response) => response.json())
                .subscribe( (result: any) => {
                    this.entitySource.next(<T>result);
                });
        }
        else {
            this.http.get(this.getUrl())
                .map((response: Response) => response.json())
                .subscribe( (result: any) => {
                    this.listSource.next(<T[]>result);
                });
        }
    }

    constructor(public http: Http) {

    }

}
