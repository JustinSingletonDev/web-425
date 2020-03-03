import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-order',
  template: `
    <mat-card class='frm-order'>
      <mat-card-header class='frm-order-header'>
        <mat-toolbar class='frm-order-toolbar'>
          Order Form
        </mat-toolbar>
      </mat-card-header>

      <form [formGroup]='form' (submit)='submit(form.value)' class='frm-order-body'>

        <br>

        <div class='title'>Services</div>

        <br>

        <div *ngFor='let service of services.controls; let i=index'>
          <input
          type='checkbox'
          [formControl]='service'
          />
          {{ user.services[i].name }}
        </div>

        <br>
        <hr>
        <br>

        <div class='title'>Standard Fees</div>

        <br>

        <div>Parts: <input name='parts' type='text' matInput ngModel></div>
        <div>Labor: <input name='labor' type='text' matInput ngModel></div>

        <br><br>

        <button class='btn-order' (click)='getSelectedServices()'>Submit</button>
        {{clickMessage}}
      </form>
    </mat-card>
  `,
  styles: []
})
export class OrderComponent implements OnInit {

  user = {
    services: [
      {name: 'Password Reset ($39.99)', selected: false, value: 39.99},
      {name: 'Spyware Removal ($99.99)', selected: false, value: 99.99},
      {name: 'RAM Upgrade ($129.99)', selected: false, value: 129.99},
      {name: 'Software Installation ($49.99)', selected: false, value: 49.99},
      {name: 'Tune-Up ($89.99)', selected: false, value: 89.99},
      {name: 'Keyboard Cleaning ($45.00)', selected: false, value: 45},
      {name: 'Disk Clean-Up ($149.99)', selected: false, value: 149.99},
    ]
  }

  clickMessage = '';

  getSelectedServices() {
    const selected = this.user.services.filter(c => c.selected);

    const selectedValues = this.user.services.reduce((a, o) => o.selected == true ? a.concat(o.value) : a, []);
    const total = selectedValues.reduce((a, b) => a + b, 0);
    alert(selectedValues);
    alert(total);
  }

  form;

  constructor(private fb: FormBuilder) {
    console.clear();

    this.form = this.fb.group({
      services: this.buildServices()
    });

  }

  get services() {
    return this.form.get('services') as FormArray;
  };

  buildServices() {
    const arr = this.user.services.map(s => {
      return this.fb.control(s.selected);
    });
    return this.fb.array(arr);
  }

  submit(value) {
    const f = Object.assign({}, value, {
      services: value.services.map((s, i) => {
        return {
          value: this.user.services[i].value,
          selected: s
       }
      })
    });
  }


  ngOnInit() {

  }






}
