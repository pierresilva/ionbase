import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SplitPanelService {

  public show = new BehaviorSubject<boolean>(false);

  constructor() {

    this.show.subscribe(res => {
      console.log('Show split panel ' + res);
    });
  }
}
