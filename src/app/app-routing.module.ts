import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./auth/auth.module').then(a=>a.AuthModule)},
  {path:'auth', loadChildren:()=>import('./auth/auth.module').then(a=>a.AuthModule)},
  {path:'user', loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)},
  {path:'tutor', loadChildren:()=>import('./tutor/tutor.module').then(t=>t.TutorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
