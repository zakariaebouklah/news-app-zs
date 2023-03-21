import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private d = new Date();

  private today = this.d.getDate()  + "-" + (this.d.getMonth()+1) + "-" + this.d.getFullYear()
  private yesterday = (this.d.getDate()-1 ) + "-" + (this.d.getMonth()+1) + "-" + this.d.getFullYear()

  private apiGeneralFeedUrl: string = `https://newsapi.org/v2/everything?from=${this.yesterday}&to=${this.today}&sortBy=popularity&apiKey=${environment.newsKey}&q=*`

  private apiAllSourcesUrl : string = `https://newsapi.org/v2/top-headlines/sources?apiKey=${environment.newsKey}`

  public country: string = "ma"
  private apiTrendsByCountryUrl: string = `https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=${environment.newsKey}`

  constructor(private httpClient: HttpClient) {}

  getGeneralFeed(): Observable<object>
  {
    return this.httpClient.get<object>(this.apiGeneralFeedUrl)
  }

  getAllSources(): Observable<object>
  {
    return this.httpClient.get<object>(this.apiAllSourcesUrl)
  }

  getTrendsByCountry(): Observable<object>
  {
    console.log("changes")
    return this.httpClient.get<object>(this.apiTrendsByCountryUrl)
  }

  getTrendsAfterChanges(country: string): Observable<object>
  {
    // console.log("after changes : " + country)
    this.country = country;
    // console.log(this.country)
    // console.log(this.apiTrendsByCountryUrl)
    return this.httpClient.get<object>(`https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=${environment.newsKey}`);
  }

}
