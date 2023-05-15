import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  private trendingUrl:string = `https://newsapi.org/v2/everything?apiKey=${environment.newsKey}`
  private url = `https://newsapi.org/v2/everything?from=2023-05-05&to=2023-04-29&q=trending&sortBy=publishedAt&apiKey=${environment.newsKey}`

  constructor(private http : HttpClient) { }

  getTrending() : Observable<object>{
    return this.http.get<object>(this.url);
  }
}
