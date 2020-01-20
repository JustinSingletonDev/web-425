/*
============================================
; Title: Assignment 3.2
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of routing in an Angular project.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singleton-query-params';
  userId = 12345;
}
