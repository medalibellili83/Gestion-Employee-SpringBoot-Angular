import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  id:any;
  employees:any=[];


  constructor(private activatedRoute: ActivatedRoute, private employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {

        console.log('here fined employee', data);
        this.employees= data;

      }
    );
  }

}
