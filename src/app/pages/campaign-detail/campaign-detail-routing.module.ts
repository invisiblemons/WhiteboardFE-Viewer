import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignDetailComponent } from './campaign-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignDetailComponent,
    data: {
      breadcrumb: 'detail-campaign'
    }  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignDetailRoutingModule { }
