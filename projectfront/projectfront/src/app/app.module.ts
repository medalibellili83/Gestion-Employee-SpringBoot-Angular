import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { HeaderComponent } from './components/header/header.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { ProfilComponent } from './compnents/profil/profil.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    HeaderComponent,
    DisplayEmployeeComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
