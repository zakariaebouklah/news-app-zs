import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(public logoutService: LogoutService, private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.handleAuthStateChanged()
  }

}
