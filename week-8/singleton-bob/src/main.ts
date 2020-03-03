import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
============================================
; Title: Assignment 9.3
; Author: Justin Singleton
; Date: 25 February 2020
; Description: This program demonstrates the
; use of Angular as a whole.
;===========================================
*/

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
