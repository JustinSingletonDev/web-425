/*
============================================
; Title: Assignment 1.5
; Author: Justin Singleton
; Date: 20 December 2019
; Description: This program demonstrates the
; use of components in an Angular project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Welcome to Singleton Shipping!
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
