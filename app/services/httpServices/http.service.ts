import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService <T> {

    //protected _dataObserver: Observer;
    protected _endpoint: string = 'http://localhost:4000/api';  // TODO: Get it from constants.
    protected _entityUrl: string; // To be overriden by child classes.

    private listSource = new Subject<T[]>();
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
     */
    get() {
        this.http.get(this.getUrl())
            .map((response: Response) => <T[]>response.json())
            .subscribe( (result: any) => {
                this.listSource.next(result);
            });
    }

    aa() {
       this.listSource.next([{'description': '!!!'}])
    }

    constructor(public http: Http) {

    }

}
