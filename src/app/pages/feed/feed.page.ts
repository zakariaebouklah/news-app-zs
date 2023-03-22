import {Component, Input, OnInit} from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";
import {FeedService} from "../../services/api/feed.service";
import {Article} from "../../models/article";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  sortMethod: string = this.feedService.sortBy

  query: string = this.feedService.query

  fromDate: string = this.feedService.fromDate
  toDate: string = this.feedService.toDate

  minDate: string = this.feedService.minDate
  maxDate: string = this.feedService.maxDate

  @Input() feedArticles: Article[] = []

  constructor(
    public logoutService: LogoutService,
    private stateService: StateService,
    private feedService: FeedService
  ) { }

  ngOnInit(): void {

    console.log(this.toDate)
    console.log(this.fromDate)

    this.stateService.handleAuthStateChanged()

    // @ts-ignore
    this.feedService.getFeed().subscribe(({articles}) => {
      console.log(articles)
      this.feedArticles = articles
    })
  }

  validateDate(): void
  {
    if(Date.parse(this.fromDate) > Date.parse(this.toDate))
    {
      alert("Date Interval is not logic...");
      this.fromDate = "";
      this.toDate = "";
    }
    if(Date.parse(this.fromDate) < Date.parse(this.minDate))
    {
      alert("lower bound date is incorrect !! make sure that the difference between the two dates is 1 month or less...");
      this.fromDate = "";
      this.toDate = "";
    }
    if(Date.parse(this.toDate) > Date.parse(this.maxDate))
    {
      alert("upper bound date is incorrect !! you cannot exceed today's date...");
      this.fromDate = "";
      this.toDate = "";
    }
  }

  handleSubmit(): void
  {
    if(this.query == null || this.toDate == '' || this.fromDate == '')
    {
      alert("You must fill every field available");
      return ;
    }
    // @ts-ignore
    this.feedService.handleNewUserChoices({q :this.query, from: this.fromDate, to: this.fromDate, sort: this.sortMethod}).subscribe(({articles}) => {
      console.log(articles)
      this.feedArticles = articles
    })
  }

  handleSortChange(): void
  {
    // @ts-ignore
    this.feedService.handleSortMethodChanges(this.sortMethod).subscribe(({articles}) => {
      console.log(articles)
      this.feedArticles = articles;
    })
  }

}
