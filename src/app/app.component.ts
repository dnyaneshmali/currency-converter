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
  public convertFactor: any;
  public showDisclaimer: boolean;

  constructor(public appservice: AppServices) {
  }

  ngOnInit() {
    this.currencyList = ['CAD', 'USD', 'EUR'];
    this.showDisclaimer = false;
  }

  baseCurrChange() {
    this.convertFactor = this.currModel.baseCurrName + '_' + this.currModel.targetCurrName;
    this.appservice.getCurrData(this.convertFactor).subscribe(respData => {
      if (respData) {
        this.resObj = respData;
        this.currModel.targetCurr = respData[this.convertFactor] * this.currModel.baseCurr;
        // this.currModel.targetCurr = this.currModel.baseCurr * this.resObj.rates[this.currModel.targetCurrName];
      } else {
        console.log('Currency Not Found');
      }
    }, err => {
      console.log('In Error Block');
    }, () => {
      console.log('In Complete Block');
    });
  }
  showDisclaimers() {
    this.showDisclaimer = true;
  }
  closeDisclaimers() {
    this.showDisclaimer = false;
  }
}
