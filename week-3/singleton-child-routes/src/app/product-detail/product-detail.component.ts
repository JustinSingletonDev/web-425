/*
============================================
; Title: Assignment 3.3
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of Child routes in an Angular project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Here is the ID for the Product: {{ productId }}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
    </div>
  `,
  styles: [ `
    .product {
      background-color: light-blue;
      text-align: center;
    }
    h1 {
      color: orange;
    }
  `]
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  sellerId = 2222;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
