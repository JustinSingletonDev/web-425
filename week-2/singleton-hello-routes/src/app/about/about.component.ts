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
  selector: 'app-about',
  template: `
    <p>
      How ABOUT this!
    </p>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }

      p {
        font-size: 40px;
        color: green;
      }
    `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
