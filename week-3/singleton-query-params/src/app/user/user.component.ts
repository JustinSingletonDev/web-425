/*
============================================
; Title: Assignment 3.2
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of routing in an Angular project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>User Detail for User: {{ userId }}</h2>
      </div>
    </div>
  `,
  styles: [ `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: green;
      font-size: 50px;
    }
  `]
})
export class UserComponent implements OnInit {

  userId: string;

  constructor(route:ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
