import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LibExamplesComponent } from './lib-examples/lib-examples.component';

@NgModule({
  declarations: [
    HomeComponent,
    GetStartedComponent,
    LibExamplesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
