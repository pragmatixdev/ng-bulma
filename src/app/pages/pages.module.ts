import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ComponentsModule } from '../components/components.module';
import { DevelopmentTypesComponent } from './development/development.component';
import { HomeComponent } from './home/home.component';

import { BmCarouselModuleExport } from 'ng-bulma-lib';

@NgModule({
  declarations: [
    AboutComponent,
    CareerComponent,
    DevelopmentTypesComponent,
    HomeComponent
  ],
  exports: [
    AboutComponent,
    CareerComponent,
    DevelopmentTypesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    BmCarouselModuleExport
  ]
})
export class PagesModule {
}
