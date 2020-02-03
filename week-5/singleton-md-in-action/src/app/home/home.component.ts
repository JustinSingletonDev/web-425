/*
============================================
; Title: Assignment 5.4
; Author: Justin Singleton
; Date: 2 February 2020
; Description: This program demonstrates the
; use of Angular Material to bring
; together the Toolbar, MatCards, and
; Flex-Layout.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class='home-header'>
      <h1>Welcome to my Home!</h1>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
