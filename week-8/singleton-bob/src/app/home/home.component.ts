import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to Bob's Computer Repair Shop!</h1>
  `,
  styles: [`
    h1 {
      margin-top: 10%;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
