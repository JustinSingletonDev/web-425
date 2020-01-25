/*
============================================
; Title: Assignment 4.2
; Author: Justin Singleton
; Date: 22 January 2020
; Description: This program demonstrates the
; use of Inversion Control and Dependency
; Injection in an Angular project.
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './user';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(0, "Apple", "Red");
  }
}
