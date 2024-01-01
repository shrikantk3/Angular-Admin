import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRouterModule } from './user.router.module';
import { RouterModule } from '@angular/router';
import { UserComponentClass } from './user.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserDashboardComponent,
    UserComponentClass
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRouterModule,
    SharedModule
  ]
})
export class UserModule { }
