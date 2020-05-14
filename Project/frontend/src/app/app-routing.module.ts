

import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import { HomeGuard } from './home.guard';
const routes: Routes = [
  {path:"" ,component:LoginComponent,canActivate:[HomeGuard]},
  {path:"login",component:LoginComponent,canActivate:[HomeGuard]},
  {path:"register",component:RegisterComponent,canActivate:[HomeGuard]},
  {path:"profile",component:ProfileComponent, canActivate: [AuthGuard]},
  {path:"**" ,component:LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}