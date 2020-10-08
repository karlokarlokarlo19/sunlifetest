import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpandedDashboardPage } from '../expanded-dashboard/expanded-dashboard.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '', component: HomePage,
  },
  {
    path: 'expanded', component: ExpandedDashboardPage
  },
  {
    path: 'policyServing', component: ExpandedDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
