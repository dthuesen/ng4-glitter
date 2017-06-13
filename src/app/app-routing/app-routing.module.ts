import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GlitterComponent } from '../glitter/glitter.component'
import { LoginComponent } from '../login/login.component'

const routes: Routes = [
  { path: '', redirectTo: 'glitter', pathMatch: 'full' },
  { path: 'glitter', component: GlitterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: GlitterComponent },
];

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
    ]
})
export class AppRoutingModule { }


