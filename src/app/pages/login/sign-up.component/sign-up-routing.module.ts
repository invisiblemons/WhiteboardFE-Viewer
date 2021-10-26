import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpDetailComponent } from './sign-up-detail/sign-up-detail.component';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    data: {
      breadcrumb: 'sign-up'
    },
    children: [
      {
        path: 'sign-up-detail',
        component: SignUpDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
