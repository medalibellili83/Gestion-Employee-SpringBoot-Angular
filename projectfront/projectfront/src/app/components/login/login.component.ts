import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : any = "" ;
  password : any = "";
  emp:Employee=<Employee>{}  ;
  constructor(private employeeService: EmployeeService, private route: Router) { }

  ngOnInit(): void {
    this.login();
  }
  login(){
    console.log(this.email)
    this.emp.email = this.email ;
    this.emp.password = this.password;
    this.employeeService.login(this.emp).subscribe(
      (response: Employee) => {

        localStorage.setItem("emp",JSON.stringify(response));
        if(response.role ==="ADMIN"){
          this.route.navigate(['/employee']);
        }
        if(response.role ==="USER"){
          this.route.navigate(['/employee']);
        }
      },
      (error: HttpErrorResponse)=>{
       // alert(error.message)
      }
    );

  }
}
