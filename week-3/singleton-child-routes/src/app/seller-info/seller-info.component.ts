import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    I am ALWAYS the seller! {{ sellerID }}
  `,
  styles: [`
    :host { background: yellow; }
  `]
})
export class SellerInfoComponent implements OnInit {

  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
