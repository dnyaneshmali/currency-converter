import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppServices {

  constructor(private http: HttpClient) { }
  public getFixerCurrData<T>(): Observable<T> {
  const fixerUrl = 'http://data.fixer.io/api/latest?access_key=f97cf98a4ef37901aac6e392fdd8a765&base=EUR&symbols=USD,EUR,CAD';
  return this.http.get<T>(fixerUrl);
  }

  public getCurrData<T>(convertFactor): Observable<T> {
    const url = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + convertFactor + '&compact=ultra&apiKey=cf75f1e861c9426a0704';
    return this.http.get<T>(url);
  }

}
