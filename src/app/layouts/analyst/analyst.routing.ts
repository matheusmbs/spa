import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueComponent } from './issue/issue.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: DashboardComponent
    },
  {
    path: 'issue',
    component: IssueComponent
  }]
  }
];
