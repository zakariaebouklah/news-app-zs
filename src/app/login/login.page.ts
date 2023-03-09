import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: "",
    password: ""
  }

  error = "";

  constructor(private router: Router, private fireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  handleLogin(e: Event)
  {
    e.preventDefault();

    this.fireAuth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
      console.log(res);
      this.router.navigateByUrl("tabs");
      })
      .catch((error) => {
      console.log(error);
        console.log(Object.keys(error));
        this.error = error.code;
      })

  }

}
