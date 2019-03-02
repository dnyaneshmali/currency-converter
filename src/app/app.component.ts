import { Component } from '@angular/core';
import {AppModel} from './app.model';
import {AppServices} from './app.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppServices]
})
export class AppComponent {
  public currModel = new AppModel();
  public resObj: any;
  constructor(public appservice: AppServices) {
  }
  fromCurrChange() {
    console.log('ready');
    console.log(this.currModel.fromCurr);
    this.appservice.getCurrData().subscribe(respData => {
      if (respData) {
        this.resObj = respData;
        this.currModel.toCurr = this.currModel.fromCurr * this.resObj.rates['CAD'];
        console.log(this.resObj);
      } else {
        console.log('Currency Not Found');
      }
    }, err => {
      console.log('In Error Block');
    }, () => {
      console.log('In Complete Block');
    });
  }
}
