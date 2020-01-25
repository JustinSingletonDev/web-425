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

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FruitService } from './user.service';
import { Fruit } from './user';

@Component({
  selector: 'app-root',
  template: `
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Fruit!!!</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody *ngFor="let fruit of fruits | async">
              <tr>
                <td>{{ fruit.id }}</td>
                <td>{{ fruit.name }}</td>
                <td>{{ fruit.pricePerPound }}</td>
                <td>{{ fruit.quantity }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'singleton-async-pipe';
  fruits: Observable<Fruit[]>;

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruit();
  }
}
