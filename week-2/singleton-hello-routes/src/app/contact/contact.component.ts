import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <p>
      Where are my CONTACTS!
    </p>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }

      p {
        font-size: 50px;
        color: red;
      }
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
