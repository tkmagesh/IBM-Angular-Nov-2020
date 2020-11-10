import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

/* Decorator - associate meta data information with a type */
@NgModule({
  declarations: [
    /* register the UI entities - Component, Directive, Pipe */
    AppComponent
    , GreeterComponent
  ],
  imports: [
    /* register the other modules you want to use */
    BrowserModule
  ],
  providers: [
    /* register the services */
  ],
  bootstrap: [
    /* top most components that you use in the index.html file */
    //AppComponent
    GreeterComponent
  ]
})
export class AppModule {}
