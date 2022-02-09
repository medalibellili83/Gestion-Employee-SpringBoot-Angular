import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public login(emp:Employee){
    return this.httpClient.post<Employee>(`${this.url}/emp/login`,emp)
  }
//crud

  public getEmployeeById(id): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}/emp/find/${id}`);
  }
  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.url}/emp/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.url}/emp/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.url}/emp/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/emp/delete/${employeeId}`);
  }
}
