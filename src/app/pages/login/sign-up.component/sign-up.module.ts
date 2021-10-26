import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpDetailComponent } from './sign-up-detail/sign-up-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthModule } from '../auth.module';


@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ComponentsModule,
    AuthModule
  ],
  declarations: [SignUpComponent, SignUpDetailComponent]
})
export class SignUpModule {}