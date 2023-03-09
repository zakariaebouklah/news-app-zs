import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public logoutService: LogoutService, private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.handleAuthStateChanged()
  }

}
