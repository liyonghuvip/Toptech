import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Http} from "@angular/http";

@Injectable()

export class BackgroundService {

    constructor(public _http: Http) {
    }

    getImageUrl() {
        return this._http.get('/img')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            })
    }
}