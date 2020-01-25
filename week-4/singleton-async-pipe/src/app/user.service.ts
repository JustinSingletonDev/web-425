/*
============================================
; Title: Assignment 4.4
; Author: Justin Singleton
; Date: 25 January 2020
; Description: This program demonstrates the
; use of Async Pipes in an Angular
; project.
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './user';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: 'Apple', pricePerPound: '$2', quantity: 10},
    {id: 2, name: 'Orange', pricePerPound: '$3', quantity: 20},
    {id: 3, name: 'Pineapple', pricePerPound: '$1', quantity: 30},
    {id: 4, name: 'Lime', pricePerPound: '$.50', quantity: 40},
    {id: 5, name: 'Banana', pricePerPound: '$5', quantity: 10}
  ];



  constructor() { }

  getFruit(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
