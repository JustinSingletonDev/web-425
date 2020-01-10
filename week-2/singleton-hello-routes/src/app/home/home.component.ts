/*
============================================
; Title: Assignment 2.4
; Author: Justin Singleton
; Date: 9 January 2020
; Description: This program demonstrates the
; use of Angular routes.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      HOME is where the heart is!
    </p>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }

      p {
        font-size: 30px;
        color: orange;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
