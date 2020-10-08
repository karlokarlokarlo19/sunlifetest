import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { ExpandedDashboardPage } from './expanded-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ExpandedDashboardPage
  },
  {
    path: '/',
    component: HomePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpandedDashboardPageRoutingModule { }
