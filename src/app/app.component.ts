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
  public currencyModel = new AppModel();
  public responseObj: any;
  public currencyList: any;
  public coversionCurrencies: any;
  public coversionResult: number;
  public showDisclaimerModal: boolean;

  constructor(public appservice: AppServices) {
  }

  ngOnInit() {
    this.currencyList = ['CAD', 'USD', 'EUR'];
    this.showDisclaimerModal = false;
  }

  baseCurrChange() {
    this.coversionCurrencies = this.currencyModel.baseCurrName + '_' + this.currencyModel.targetCurrName;
    this.appservice.getCurrData(this.coversionCurrencies).subscribe(respData => {
      if (respData) {
        this.responseObj = respData;
        this.coversionResult = respData[this.coversionCurrencies] * this.currencyModel.baseCurr;
        this.currencyModel.targetCurr = parseFloat((this.coversionResult).toFixed(2));
      } else {
        console.log('Currency Not Found');
      }
    }, err => {
      console.log('Something went Wrong!!');
    }, () => {
      console.log('Currency Found Successfully!!');
    });
  }
  showDisclaimers() {
    this.showDisclaimerModal = true;
  }
  closeDisclaimers() {
    this.showDisclaimerModal = false;
  }
}
