import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService <ClassType> {

    protected _endpoint: string = 'http://localhost:4000/api/';  // TODO: Get it from constants.
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
     *  @return The url for the entity.
     */
    getUrl () : string {
        return this._endpoint + '/' + this.entityUrl;
    }

    get() {
        console.info('HttpService.http', this);
        return this.http.get(this.getUrl())
                   //.map((response: Response) => <ClassType[]>response.json())
                   //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    constructor(public http: Http) {
        console.info('http inside constr', http)
    }

}
