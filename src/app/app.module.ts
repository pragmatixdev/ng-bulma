import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBulmaLibModule } from 'ng-bulma-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBulmaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
