import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"login" , component: LoginComponent},
  {path:"employee" , component: EmployeeComponent},
  { path: "displayEmployee/:id", component: DisplayEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
