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
