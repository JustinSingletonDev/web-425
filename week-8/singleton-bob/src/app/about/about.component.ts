import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>About our Family!</h1>

    <p>We are a family company and take pride in doing a great job.</p>
    <p>Every computer is given time and love. Our Guarantee!</p>

    <img src="assets/img/family.jpg">
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
