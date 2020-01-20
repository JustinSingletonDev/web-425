/*
============================================
; Title: Assignment 3.3
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of Child routes in an Angular project.
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent,
    children: [
      { path: '', component: ProductDescriptionComponent },
      { path: 'seller/:id', component: SellerInfoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
