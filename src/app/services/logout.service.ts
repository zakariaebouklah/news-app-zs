import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private ngFireAuth: AngularFireAuth, private router: Router) { }

  handleLogout(): void
  {
    this.ngFireAuth.signOut()
      .then(() => {
        this.router.navigateByUrl('login').then(() => console.log('Successful Logout...'))
      })
      .catch((err) => {
        alert("error occurred somewhere...");
        console.log(err)
      })
  }
}
