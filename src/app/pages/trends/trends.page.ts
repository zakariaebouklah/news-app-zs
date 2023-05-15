import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";
import { TrendsService } from 'src/app/services/api/trends.service';
import { Trend } from 'src/app/models/trend';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.page.html',
  styleUrls: ['./trends.page.scss'],
})
export class TrendsPage implements OnInit {

  trends:Trend[] = []

  constructor(public logoutService: LogoutService, private stateService: StateService, public trendsService:TrendsService) { }

  ngOnInit(): void {
    this.stateService.handleAuthStateChanged()
    this.trendsService.getTrending().subscribe((data)=>{
      this.trends = data['articles']
      console.log(this.trends)
    })
  }
}
