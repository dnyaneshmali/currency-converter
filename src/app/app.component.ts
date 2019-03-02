import {Component, OnInit} from '@angular/core';
import {AppModel} from './app.model';
import {AppServices} from './app.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppServices]
})
export class AppComponent implements OnInit {
  public currModel = new AppModel();
  public resObj: any;
  public currencyList: any;
  constructor(public appservice: AppServices) {
  }
  ngOnInit() {
    this.currencyList = ['CAD', 'USD', 'EUR'];
  }
  baseCurrChange() {
    console.log('ready');
    console.log(this.currModel);
    this.appservice.getCurrData().subscribe(respData => {
      if (respData) {
        this.resObj = respData;
        this.currModel.targetCurr = this.currModel.baseCurr * this.resObj.rates[this.currModel.targetCurrName];
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
