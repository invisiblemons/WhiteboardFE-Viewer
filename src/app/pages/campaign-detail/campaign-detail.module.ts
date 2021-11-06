import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailComponent } from './campaign-detail.component';
import { CampaignDetailRoutingModule } from './campaign-detail-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [CampaignDetailComponent],
  imports: [
    CommonModule,
    CampaignDetailRoutingModule,
    ComponentsModule
  ]
})
export class CampaignDetailModule { }
