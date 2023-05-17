import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  private d: Date = new Date();
  private today: string = this.d.getFullYear()  + "-" + (this.d.getMonth()+1) + "-" + this.d.getDate();
  private trendingUrl:string = `https://newsapi.org/v2/everything?apiKey=${environment.newsKey}`
  private url = `https://newsapi.org/v2/everything?from=${this.getLastWeekDate(new Date())}&to=${this.today}&q=trending&sortBy=publishedAt&apiKey=${environment.newsKey}`

  constructor(private http : HttpClient) { }

  getTrending() : Observable<object>{
    return this.http.get<object>(this.url);
  }

  getLastWeekDate(d : Date): string
  {
    const previous = new Date(d.getTime());
    previous.setDate(d.getDate() - 6)
    return previous.getFullYear() + "-" + (previous.getMonth() + 1) + "-" + previous.getDate();
  }
}
