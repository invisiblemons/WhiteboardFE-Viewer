import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path:'',
    component: AdminLayoutComponent,
    children : [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'detail-school',
        loadChildren: () => import('./pages/school-detail/school-detail.module').then(m => m.SchoolDetailModule)
      },
      {
        path: 'detail-campaign',
        loadChildren: () => import('./pages/campaign-detail/campaign-detail.module').then(m => m.CampaignDetailModule)
      }
    ]
  },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'auth',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'auth',
  //       loadChildren: () => import('./pages/login/auth.module').then(m => m.AuthModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
