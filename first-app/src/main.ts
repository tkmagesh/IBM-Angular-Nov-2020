import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



/* 
import * as calculator from './calc';
console.log(calculator);
//const add = calculator.add;
const { add } = calculator;
console.log(add(10,20)); 
*/

/* 
import { add } from './calc'
console.log(add(10, 20));  
*/

//importing the default exported entity
import calculator from './calc';
console.log(calculator.add(10,20));