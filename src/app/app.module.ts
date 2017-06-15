import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { FirebaseConfig } from '../firebase-config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GlitterComponent } from './glitter/glitter.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GlitterComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(FirebaseConfig),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
