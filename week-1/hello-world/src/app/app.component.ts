/*
============================================
; Title: Assignment 1.3
; Author: Justin Singleton
; Date: 19 December 2019
; Description: This program is to be able
; to show the message on the Home page.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello World!';
}
