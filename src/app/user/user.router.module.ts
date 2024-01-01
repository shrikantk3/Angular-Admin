import { Routes, RouterModule, Route } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { NgModule } from "@angular/core";
import { UserComponentClass } from "./user.component";

const _routes:Routes=[
    {
        path:':id', 
        component:UserComponentClass, 
        children:[
            {path:'', component:UserDashboardComponent}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(_routes)],
    exports:[RouterModule]
})
export class UserRouterModule{}