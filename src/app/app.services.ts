import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppServices {

  constructor(private http: HttpClient) {
  }
  public getCurrData(conversionCurrencies) {
    const url = 'https://free.currencyconverterapi.com/api/v6/convert?q='
    + conversionCurrencies + '&compact=ultra&apiKey=cf75f1e861c9426a0704';
    return this.http.get(url);
  }

}
