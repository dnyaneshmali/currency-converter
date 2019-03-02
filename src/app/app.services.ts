import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppServices {

  constructor(private http: HttpClient) { }
  public url = 'http://data.fixer.io/api/latest?access_key=f97cf98a4ef37901aac6e392fdd8a765&base=EUR&symbols=USD,EUR,CAD';
  /*getCurrData(): Observable<[]> {
    return this.http.post(this.url);
  }*/

  public getCurrData<T>(): Observable<T> {
    return this.http.get<T>(this.url);
  }

}
