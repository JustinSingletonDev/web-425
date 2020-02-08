/*
============================================
; Title: Assignment 6.3
; Author: Justin Singleton
; Date: 7 February 2020
; Description: This program demonstrates the
; use of Output properties in an Angular
; application.
;===========================================
*/

import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singleton-output-properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
