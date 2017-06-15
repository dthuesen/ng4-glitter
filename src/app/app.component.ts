import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

/** FIREBASE */
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private af:     AngularFireDatabase,
    private router: Router,
    public afAuth:  AngularFireAuth
  ) {}

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

}
