import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    email: '',
    password: ''
  }

  error = '';

  constructor(
    private router: Router, 
    private fireAuth: AngularFireAuth,
    private authService: AuthService
    ) { }

  ngOnInit() {
  }

  handleRegister(e : Event)
  {
    e.preventDefault()

    this.fireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password)
                 .then((res) => {
                  console.log(res);
                  this.router.navigateByUrl("login");
                 })
                 .catch((err) => {
                  console.log(err);
                  console.log(Object.keys(err));
                  this.error = err.code;
                 })
  }

  /**
   * Maybe this method won't be working when deploying to iOS or Android... (it's only working for the web app now)
   * for that check googleAuth for these 2 platforms : history chrome 02/03/2023
   * */
  signInWithGoogle()
  {
    this.authService.GoogleAuth();
  }

}
