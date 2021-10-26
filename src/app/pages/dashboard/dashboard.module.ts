import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from "../../components/components.module";
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
