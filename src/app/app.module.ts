import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBulmaLibModule } from 'ng-bulma-lib';
import { SectionContainerComponent } from './section-container/section-container.component';
import { InfopackComponent } from './infopack/infopack.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionContainerComponent,
    InfopackComponent
  ],
  imports: [
    BrowserModule,
    NgBulmaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
