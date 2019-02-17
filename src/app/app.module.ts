import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { BmModalModuleExport } from 'ng-bulma-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    BmModalModuleExport
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
