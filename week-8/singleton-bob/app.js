"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const services = [
  {title: 'Password Reset ($39.99)', selected: false, value: 39.99},
  {title: 'Spyware Removal ($99.99)', selected: false, value: 99.99},
  {title: 'RAM Upgrade ($129.99)', selected: false, value: 129.99},
  {title: 'Software Installation ($49.99)', selected: false, value: 49.99},
  {title: 'Tune-Up ($89.99)', selected: false, value: 89.99},
  {title: 'Keyboard Cleaning ($45.00)', selected: false, value: 45},
  {title: 'Disk Clean-Up ($149.99)', selected: false, value: 149.99},
];
function getServices() {
    return services;
}

function getServicesByValue(serviceValue) {
    return services.find(c => c.value == serviceValue);
}

