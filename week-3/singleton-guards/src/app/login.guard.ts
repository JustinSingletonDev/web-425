/*
============================================
; Title: Assignment 3.4
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of Route Guards in an Angular project.
;===========================================
*/

import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("Hey you aren't logged in. How about you do that.");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
