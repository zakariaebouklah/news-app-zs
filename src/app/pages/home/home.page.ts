import {Component, Input, OnInit} from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";
import {HomeService} from "../../services/api/home.service";
import {Article} from "../../models/article";
import {Source} from "../../models/source";
import {Trend} from "../../models/trend";
import {AddService} from "../../services/fire/add.service";
import {collection, getDocs, query, where} from "@angular/fire/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input() randomArticles: Article[] = []
  articlesExistsInSaves: boolean[] = []

  allSources: Source[] = []

  country: string = this.homeService.country
  trends: Trend[] = []

  isAdded: boolean = false;

  constructor(
    public logoutService: LogoutService,
    private stateService: StateService,
    public homeService: HomeService,
    public addService: AddService,
    public ngFirestore: AngularFirestore
  ) {}

  ngOnInit(): void {

    this.stateService.handleAuthStateChanged()

    // @ts-ignore
    this.homeService.getGeneralFeed().subscribe(({articles}) => {
        this.randomArticles = articles

    const promises = this.randomArticles.map(article => {
      return this.checkIfPostExistsInSaves(article);
    });

    Promise.all(promises)
      .then(results => {
        this.articlesExistsInSaves = results;
      })
      .catch(err => {
        console.log(err)
      });

      console.log('articles length:', this.randomArticles.length);
      console.log('articles :', this.randomArticles);

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

  handleSave(article: Article, event : Event)
  {
    this.isAdded = true;
    this.addService.addNewPostToCollection(article);
    // @ts-ignore
    console.log("handleSave")
  }

  // check if post is saved in order to display save button in the view or not
  // @ts-ignore
  async checkIfPostExistsInSaves(post: Article): Promise<boolean>
  {
    const colRef = collection(this.ngFirestore.firestore, 'Post')
    const q = query(colRef, where("url", "==", post.url))
    const posts = await getDocs(q)
    return posts.docs.length > 0;
  }

}
