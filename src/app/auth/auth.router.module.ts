import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent } from './login/login.component';
import {SignupComponent } from './signup/signup.component';
import {ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth.component'
import { SignupStepsComponent } from './signup-steps/signup-steps.component';
const _routes:Routes=[
    {path:'', 
        component:AuthComponent,
        children:[
            {path:'', component:LoginComponent},
            {path:'login', component:LoginComponent},
            {path:'signup', component:SignupComponent},
            {path:'forgot', component:ForgotPasswordComponent},
            {path:'steps/:id', component:SignupStepsComponent},
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(_routes)],
    exports:[RouterModule]
})

export class AuthRouterModule{}