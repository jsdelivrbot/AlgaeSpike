import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getLakes() {
    return this._http.get('/api/lakes')
      .map(result => this.result = result.json().data);
  }

}
