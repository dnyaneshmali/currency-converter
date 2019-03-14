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
  public conversionCurrencies: any;
  public conversionResult: number;
  public showDisclaimerModal: boolean;

  constructor(public appservice: AppServices) {
  }

  ngOnInit() {
    this.currencyList = ['CAD', 'USD', 'EUR'];
    this.showDisclaimerModal = false;
  }
  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 43 || charCode === 45) {
      return false;
    } else {
      this.baseCurrChange();
    }
  }
  baseCurrChange() {
    this.conversionCurrencies = this.currencyModel.baseCurrName + '_' + this.currencyModel.targetCurrName;
    this.appservice.getCurrData(this.conversionCurrencies).subscribe(respData => {
      if (respData) {
        this.responseObj = respData;
        this.conversionResult = respData[this.conversionCurrencies] * this.currencyModel.baseCurr;
        this.currencyModel.targetCurr = parseFloat((this.conversionResult).toFixed(2));
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
