import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;
  emp :any = {} ;
  constructor(private route : Router) { }

  ngOnInit(): void {
    this.emp = JSON.parse(localStorage.getItem('emp'));
  }

  goToDisplay(x){
    this.route.navigate([`displayEmployee/${x}`]);

  }

  deconnecter(){
    localStorage.removeItem('emp');
this.route.navigate(['/login'])
  }

  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }
}
