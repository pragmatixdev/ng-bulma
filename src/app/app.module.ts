import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBulmaLibModule } from 'ng-bulma-lib';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    NgBulmaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
