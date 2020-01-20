/*
============================================
; Title: Assignment 3.2
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of routing in an Angular project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Here is my Home, live in it!</h2>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: blue;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
