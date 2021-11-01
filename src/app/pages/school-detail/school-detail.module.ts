import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { SchoolDetailComponent } from './school-detail.component';
import { SchoolDetailRoutingModule } from './school-detail-routing.module';



@NgModule({
  declarations: [SchoolDetailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SchoolDetailRoutingModule
  ]
})
export class SchoolDetailModule { }
