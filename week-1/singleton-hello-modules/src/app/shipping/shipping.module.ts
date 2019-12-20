/*
============================================
; Title: Assignment 1.5
; Author: Justin Singleton
; Date: 20 December 2019
; Description: This program demonstrates the
; use of modules and components in an
; Angular project.
;===========================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
export class ShippingModule { }
