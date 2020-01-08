/*
============================================
; Title: Assignment 2.2
; Author: Justin Singleton
; Date: 8 January 2020
; Description: This program demonstrates the
; use of one-way binding in an Angular
; application.
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  title = 'singleton-one-way-binding';

  // class property
  name:string = "Justin Singleton";

  // change name function
  changeName() {
    this.name = "Bustin Bingleton";
  }
}
