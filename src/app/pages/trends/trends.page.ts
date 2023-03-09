import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-trends',
  templateUrl: './trends.page.html',
  styleUrls: ['./trends.page.scss'],
})
export class TrendsPage implements OnInit {

  constructor(public logoutService: LogoutService, private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.handleAuthStateChanged()
  }

}
