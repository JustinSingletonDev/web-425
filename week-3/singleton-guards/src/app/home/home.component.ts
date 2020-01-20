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
  selector: 'app-home',
  template: `
    <h1 class="home">Home Component</h1>
  `,
  styles: [`
    .home {
      background-color: red;
      color: yellow;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
