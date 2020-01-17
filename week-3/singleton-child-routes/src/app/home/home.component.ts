import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Have a home, this is it.</h2>
  `,
  styles: [`
    h2 {
      color: green;
      text-align: center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
