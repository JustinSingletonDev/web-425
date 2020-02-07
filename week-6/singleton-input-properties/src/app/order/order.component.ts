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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <h4 *ngIf="!!stockSymbol">Buying {{ quantity }} shares of {{ stockSymbol }}</h4>
  `,
  styles: [`
    h4 {
      text-align: center;
      background: cyan;
    };
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
