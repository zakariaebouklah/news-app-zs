import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  GoogleAuth()
  {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider: GoogleAuthProvider)
  {
    this.fireAuth.signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        this.router.navigateByUrl('tabs')
      })
      .catch((err) => {
        console.log(err);
        alert('error');
      })
  }
}
