import { HttpClient, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of, pipe } from 'rxjs'
import {
  catchError,
  map,
  concatAll,
  delay,
  toArray,
  concatMap,
  take,
} from 'rxjs/operators'
import { Url } from './stocks-urls'

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}
  public data: any = []
  //queue observable in serial order
  getConcatAll(): Observable<any> {
    return of(...Url).pipe(
      delay(100),
      map((u: any) => this.http.get<any>(u.url, u.options)),
      concatAll(),
      toArray(),
    )
  }
  //queue observable in seial order
  //need not to use map operator
  // need not to use array by default it will return array of observable
  getConcatMap(): Observable<any> {
    return of(...Url).pipe(
      delay(500),
      concatMap((u: any) => this.http.get<any>(u.url, u.options)),
    )
  }
  //returns observable
  // we can transofrm also inner observables
  getMergeMapOverload1(): Observable<any> {
    return of(...Url).mergeMap((value: any) => value)
  }
  //this is overloaded function were we can explicitly pass function for observable and its index
  getMergeMapOverload2(): Observable<any> {
    return of(...Url).mergeMap(
      (value: any) => value,
      (outer: any, inner: any) => inner,
    )
  }
  //we can dicide how many concurrent observable we can subscribe at a time
  // here at a time 2 are subscribe and once 2 completed third one will come to queue
  getMergeMapOverload3(): Observable<any> {
    return of(...Url).mergeMap((value: any) => pipe(take(3)), 2)
  }
}
