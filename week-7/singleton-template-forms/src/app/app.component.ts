/*
============================================
; Title: Assignment 7.2
; Author: Justin Singleton
; Date: 13 February 2020
; Description: This program demonstrates the
; use of Template Forms in an Angular
; project.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singleton-template-forms';

  onSubmit(formData) {
    console.log(formData);
  }
}
