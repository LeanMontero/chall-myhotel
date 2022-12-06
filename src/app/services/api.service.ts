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

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiurl);
  }

  getEmployeesById(id: any): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiurl + '/' + id);
  }

  deleteEmployee(id: any): Observable<IEmployee[]> {
    return this.http.delete<IEmployee[]>(this.apiurl + '/' + id);
  }

  createEmployee(employeeData: any) {
    return this.http.post(this.apiurl, employeeData);
  }

  updateEmployee(id: any, employeeData: any) {
    return this.http.put(this.apiurl + '/' + id, employeeData);
  }
}
