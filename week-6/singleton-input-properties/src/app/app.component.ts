/*
============================================
; Title: Assignment 6.2
; Author: Justin Singleton
; Date: 7 February 2020
; Description: This program demonstrates the
; use of Input properties in an Angular
; application.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input Properties Example';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
