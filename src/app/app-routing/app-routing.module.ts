import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../pages/home/home.component';
import { GetStartedComponent } from '../pages/get-started/get-started.component';
import { LibExamplesComponent } from '../pages/lib-examples/lib-examples.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'get-started',
    component: GetStartedComponent,
  },
  {
    path: 'components',
    component: LibExamplesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
