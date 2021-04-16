import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Role } from './_models/role';
import { AuthGuard } from './_helpers/auth.guard';
const routes: Routes = [
  {path:'home', component: HomeComponent,canActivate: [AuthGuard],
  data: { roles: [Role.Admin]}},
  {path:'dashboard', component: DashboardComponent,canActivate: [AuthGuard],
  data: { roles: [Role.User,Role.Admin]}},
  {path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
