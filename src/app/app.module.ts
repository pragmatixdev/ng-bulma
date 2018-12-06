import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBulmaLibModule } from 'ng-bulma-lib';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SectionContainerComponent } from './section-container/section-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SectionContainerComponent
  ],
  imports: [
    BrowserModule,
    NgBulmaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
