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
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  template: `
    <h1 class="product">Product Detail Component</h1>
    <input placeholder="Enter your name" type="text" [formControl]="name">
  `,
  styles: [`
    .product {
      background-color: cyan;
      color: orange;
    }
  `]
})
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
