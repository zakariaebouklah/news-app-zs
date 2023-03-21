import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private d = new Date();

  private today : string = this.d.getFullYear()  + "-" + (this.d.getMonth()+1) + "-" + this.d.getDate()
  private toDayAMonthAgo : string = this.d.getFullYear() + "-" + (this.d.getMonth()) + "-" + this.d.getDate()

  public sortBy : string = "relevant"

  query: string = ""
  fromDate: string = ""
  toDate: string = ""

  minDate: string = this.toDayAMonthAgo
  maxDate: string = this.today

  private apiFeedUrl : string = `https://newsapi.org/v2/everything?from=${this.toDayAMonthAgo}&to=${this.today}&sortBy=${this.sortBy}&apiKey=${environment.newsKey}&q=*`

  constructor(private httpClient: HttpClient) { }

  getFeed(): Observable<object>
  {
    console.log(this.apiFeedUrl)

    return this.httpClient.get<object>(this.apiFeedUrl);
  }

  // @ts-ignore
  handleNewUserChoices({q, from, to, sort}: object): Observable<object>
  {
    console.log(`https://newsapi.org/v2/everything?from=${from}&to=${to}&sortBy=${sort}&apiKey=${environment.newsKey}&q=${q}`)
    return this.httpClient.get<object>(`https://newsapi.org/v2/everything?from=${from}&to=${to}&sortBy=${sort}&apiKey=${environment.newsKey}&q=${q}`);
  }

  handleSortMethodChanges(sortM: string): Observable<object>
  {
    console.log(`https://newsapi.org/v2/everything?from=${this.toDayAMonthAgo}&to=${this.today}&sortBy=${sortM}&apiKey=${environment.newsKey}&q=*`)
    return this.httpClient.get<object>(`https://newsapi.org/v2/everything?from=${this.toDayAMonthAgo}&to=${this.today}&sortBy=${sortM}&apiKey=${environment.newsKey}&q=*`)
  }
}
