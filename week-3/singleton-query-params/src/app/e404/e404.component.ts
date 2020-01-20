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
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>You have made it bad. 404 for you!</h2>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: red;
      font-size: 100px;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
