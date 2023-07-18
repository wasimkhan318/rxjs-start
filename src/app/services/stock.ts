import { HttpClient, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr'
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '688a4e50afmshd5547832ea891c5p1f4db9jsn96b4d48838fb',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    }

    return this.http.get<any>(this.url, options).pipe(
      map((response) => response),
      catchError((error) => {
        console.error('Error fetching project data:', error)
        return []
      }),
    )
  }
}
