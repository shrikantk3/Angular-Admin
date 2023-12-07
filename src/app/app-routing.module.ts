import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./auth/auth.module').then(a=>a.AuthModule)},
  // {path:'/', loadChildren:()=>import('./auth/auth.module').then(a=>a.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
