import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgBulmaLibModule } from 'ng-bulma-lib';
import { BmTabModuleExport } from 'ng-bulma-lib';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { InfopackComponent } from './infopack/infopack.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { SectionContainerComponent } from './section-container/section-container.component';
import { StatsComponent } from './stats/stats.component';
import { TabsComponent } from './tabs/tabs.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CareerComponent } from './pages/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    InfopackComponent,
    PageContainerComponent,
    SectionContainerComponent,
    StatsComponent,
    TabsComponent,
    AboutComponent,
    HomeComponent,
    CareerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BmTabModuleExport,
    NgBulmaLibModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
