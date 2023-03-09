import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private ngFireAuth: AngularFireAuth, private router: Router) { }

  handleAuthStateChanged(): void
  {
    this.ngFireAuth.onAuthStateChanged((user) => {
      if(user === null)
      {
        this.router.navigateByUrl('login').then(() => console.log("Make sure you're logged in..."))
      }
    })
  }
}
