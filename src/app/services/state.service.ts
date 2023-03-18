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
    // console.log(this.ngFireAuth.currentUser)
    this.ngFireAuth.onAuthStateChanged((user) => {
      console.log(user)
      if(user === null)
      {
        this.router.navigateByUrl('login').then(() => console.log("Make sure you're logged in..."))
      }
    })
  }
}
