/*
============================================
; Title: Assignment 3.3
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of Child routes in an Angular project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Have a home, this is it.</h2>
  `,
  styles: [`
    h2 {
      color: green;
      text-align: center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
