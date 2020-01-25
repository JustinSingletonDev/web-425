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

import { Component, OnInit } from '@angular/core';
import { Fruit } from './user';
import { FruitService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>Here are the Fruit</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .tbl-header {
      background-color: orange;
      color: red;
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {

  fruit: Fruit;

  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
  }

  ngOnInit() {
  }

}
