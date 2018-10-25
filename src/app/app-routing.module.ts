
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from "@angular/router";
import {DepartmentListComponent} from "./department-list/department-list.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {RegisterComponent} from "./register/register.component";

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './guards';



const routes:Routes=[
  {path:'', component: HomeComponent, canActivate: [AuthGuard] },
  {path:'login', component: LoginComponent },
  {path:'departments', component:DepartmentListComponent,canActivate: [AuthGuard]},
  {path:'employees', component:EmployeeListComponent,canActivate: [AuthGuard]},
  {path:'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents=[
  DepartmentListComponent,
  EmployeeListComponent,
  HomeComponent,
  LoginComponent,
  RegisterComponent
]
