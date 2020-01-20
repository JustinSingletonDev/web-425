/*
============================================
; Title: Assignment 3.4
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of Route Guards in an Angular project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1 class="home">Login right here!</h1>
  `,
  styles: [`
    .home {
      background-color: lavender;
      color: green;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
