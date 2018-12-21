import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../pages/about/about.component';
import { CareerComponent } from '../pages/career/career.component';
import { DevelopmentTypesComponent } from '../pages/development/development.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'web-development',
    component: DevelopmentTypesComponent,
    data: {
      name: 'web-development'
    }
  },
  {
    path: 'mobile-development',
    component: DevelopmentTypesComponent,
    data: {
      name: 'mobile-development'
    }
  },
  {
    path: 'product-design',
    component: DevelopmentTypesComponent,
    data: {
      name: 'product-design'
    }
  }
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
