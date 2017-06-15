import { Component, OnInit } from '@angular/core';

/** FIREBASE */
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FirebaseAuthStateObservable } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-glitter',
  templateUrl: './glitter.component.html',
  styleUrls: ['./glitter.component.css']
})
export class GlitterComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  userLoggedIn = false;
  glitters: FirebaseListObservable<any[]>;

  /**
   * Observable of authentication state; as of 4.0 this is only triggered via sign-in/out
   */
  user: firebase.User;

  constructor(
    private af:     AngularFireDatabase,
    private router: Router,
    public afAuth:  AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe( (auth: firebase.User) => {
      if (auth) {
        console.log('User email: ', auth.email);
        this.user = auth;
      } else {
        this.router.navigate(['login']);
      }
    })

    this.glitters = this.af.list('/glitters');
  }

  ngOnInit() {}

  addGlitter(data) {
    this.glitters.push({
      text: data.value,
      user: this.user.email,
      createdAt: ( new Date() ).toString(),
      likes: 0
    });
    data.value = '';
  }

  removeGlitter($key: string) {
    this.glitters.remove($key);
  }

  likeGlitter(key: string, count: number) {
    this.glitters.update(key, { likes: count + 1 });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

}
