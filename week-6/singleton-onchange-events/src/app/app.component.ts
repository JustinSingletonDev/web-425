/*
============================================
; Title: Assignment 6.4
; Author: Justin Singleton
; Date: 8 February 2020
; Description: This program demonstrates the
; use of OnChange() events in an Angular
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
  title = 'singleton-onchange-events';

  myGreeting = 'hello there';
  myUser: { name: string } = { name: 'Justin'}
}
