import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/** FIREBASE */
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;
  authState: any;

  constructor(
    private af:     AngularFireDatabase,
    private router: Router,
    public afAuth:  AngularFireAuth
  ) {
    this.user = this.afAuth.authState;
    this.authState = this.user.subscribe( (value: firebase.User) => {
      return value;
    });
    console.log(this.authState);
    if (this.afAuth.auth.currentUser) {
      console.log('this.afAuth.auth.currentUser: ', this.afAuth.auth.currentUser)
      this.router.navigate(['']);
    } else {
      console.log('User is not logged in! ', this.afAuth.auth.currentUser)
    }
  }

  ngOnInit() {
  }


  signup(form) {
    this.afAuth.auth.createUserWithEmailAndPassword(
      form.value.email,
      form.value.password
    )
    form.reset();
    if (this.afAuth.auth.currentUser) {
      console.log('Current user has been signed-up: ', this.afAuth.auth.currentUser.email)
      this.router.navigate(['']);
    } else {
      console.log('User is not logged in correctly! ', this.afAuth.auth.currentUser)
    }
  }

  login(form) {
    this.afAuth.auth.signInWithEmailAndPassword(
      form.value.email,
      form.value.password
    )
    form.reset();
    if (this.afAuth.auth.currentUser) {
      console.log('Current user has successfully logged-in: ', this.afAuth.auth.currentUser)
      this.router.navigate(['']);
    } else {
      console.log('User is not logged in correctly! ', this.afAuth.auth.currentUser)
    }
  }

}
