import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { BmInputModuleExport } from 'ng-bulma-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    FormsModule,
    BmInputModuleExport
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
