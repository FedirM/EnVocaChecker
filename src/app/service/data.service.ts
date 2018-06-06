import { Injectable, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

import * as jsonData from './data/azindex.json';

@Injectable()
export class DataService implements OnInit {
  // private _dataUrl = "http://localhost:3000/dicData";
  // private _saveUrl = "http://localhost:3000/save";

  // httpPostOptions = {
  //   headers: new HttpHeaders({
  //     'content-type': 'application/x-www-form-urlencoded'
  //   })
  // };

  private _appData = jsonData;

  constructor() {}

  ngOnInit(){
    console.log("ng on init func.....");
  }

  getDicData(){
    return(this._appData);
  }
    
}
