import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-saves',
  templateUrl: './saves.page.html',
  styleUrls: ['./saves.page.scss'],
})
export class SavesPage implements OnInit {

  constructor(public logoutService: LogoutService, private stateService: StateService) { }

  ngOnInit() {
    this.stateService.handleAuthStateChanged()
  }

}
