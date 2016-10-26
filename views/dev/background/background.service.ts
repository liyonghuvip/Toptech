import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class BackgroundService {

    constructor(private _http: Http) {
    }

    getImageUrl() {
        return this._http.get('/img')
            .map(response => response.json())
            .subscribe(data => console.log(data));
    }
}