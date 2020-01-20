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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  template: `
    <h2>This product right here is great!</h2>
  `,
  styles: [ `
    color: purple;
  `]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
