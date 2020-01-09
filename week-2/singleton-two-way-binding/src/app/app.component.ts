/*
============================================
; Title: Assignment 2.3
; Author: Justin Singleton
; Date: 8 January 2020
; Description: This program demonstrates the
; use of two-way binding in an Angular
; application.
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <br /><br /><br />

    <div class="container-fluid two-way-form">
      <h2>Two-Way Binding Example</h2><br />
      <div class="form-group">
          <input class="form-control" type="text"
                placeholder="Enter your name ..."
                [(ngModel)]="name">
          <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
      </div>
      <div class="form-group">
          <p class="alert-success">Welcome to the Jungle, {{name}}! </p>
      </div>


    </div>
  `,
  styles: [
    `
      h2 {
        color: orange;
        text-decoration: underline;
      }
      .form-group {
        background-color: light-grey;
      }
      p {
        color: green;
        font-size: 32px;
      }
      .two-way-form {
        width: 50%;
      }
    `
  ]
})
export class AppComponent {
  title = 'singleton-two-way-binding';
  name: string;
}
