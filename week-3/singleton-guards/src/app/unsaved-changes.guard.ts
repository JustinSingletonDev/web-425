/*
============================================
; Title: Assignment 3.4
; Author: Justin Singleton
; Date: 19 January 2020
; Description: This program demonstrates the
; use of Route Guards in an Angular project.
;===========================================
*/

import { Injectable } from "@angular/core";
import { CanDeactivate, Router } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Injectable ()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      return window.confirm("Your changes are not saved. Maybe do that?");
    } else {
      return true;
    }
  }
}
