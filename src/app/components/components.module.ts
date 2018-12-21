import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgBulmaLibModule } from 'ng-bulma-lib';
import { BmTabModuleExport } from 'ng-bulma-lib';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { InfopackComponent } from './infopack/infopack.component';
import { LoaderComponent } from './loader/loader.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { SectionContainerComponent } from './section-container/section-container.component';
import { StatsComponent } from './stats/stats.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    InfopackComponent,
    LoaderComponent,
    MenuComponent,
    PageContainerComponent,
    SectionContainerComponent,
    StatsComponent,
    TabsComponent
  ],
  exports: [
    BreadcrumbComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    InfopackComponent,
    LoaderComponent,
    MenuComponent,
    PageContainerComponent,
    SectionContainerComponent,
    StatsComponent,
    TabsComponent
  ],
  imports: [
    BmTabModuleExport,
    BrowserModule,
    RouterModule,
    NgBulmaLibModule
  ]
})
export class ComponentsModule { }
