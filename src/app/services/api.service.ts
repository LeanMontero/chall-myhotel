import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  apiurl = 'http://localhost:3000/employee';

  // Get Employees
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiurl);
  }

  // Get Employees by ID
  getEmployeesById(id: any): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiurl + '/' + id);
  }

  // Delete Employees
  deleteEmployee(id: any): Observable<IEmployee[]> {
    return this.http.delete<IEmployee[]>(this.apiurl + '/' + id);
  }

  // Create Employees
  createEmployee(employeeData: any) {
    return this.http.post(this.apiurl, employeeData);
  }

  // Update Employees
  updateEmployee(id: any, employeeData: any) {
    return this.http.put(this.apiurl + '/' + id, employeeData);
  }
}
