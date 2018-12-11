import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgBulmaLibModule } from 'ng-bulma-lib';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { SectionContainerComponent } from './section-container/section-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    PageContainerComponent,
    SectionContainerComponent,
  ],
  imports: [
    BrowserModule,
    NgBulmaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
