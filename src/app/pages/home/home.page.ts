import {Component, OnInit} from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";
import {HomeService} from "../../services/api/home.service";
import {Article} from "../../models/article";
import {Source} from "../../models/source";
import {Trend} from "../../models/trend";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  randomArticles: Article[] = []

  allSources: Source[] = []

  country: string = this.homeService.country
  trends: Trend[] = []

  constructor(
    public logoutService: LogoutService,
    private stateService: StateService,
    public homeService: HomeService
  )
  { }

  ngOnInit(): void {

    this.stateService.handleAuthStateChanged()

    // @ts-ignore
    this.homeService.getGeneralFeed().subscribe(({articles}) => {
        this.randomArticles = articles
    })

    // @ts-ignore
    this.homeService.getAllSources().subscribe(({sources}) => {
      this.allSources = sources
    })

    // @ts-ignore
    this.homeService.getTrendsByCountry().subscribe(({articles}) => {
      this.trends = articles
    })

  }

  handleChanges()
  {
    // @ts-ignore
    this.homeService.getTrendsAfterChanges(this.country).subscribe(({articles}) => {
      console.log(articles)
      this.trends = articles
    })
  }

  handleSave()
  {

  }

}
