import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'creationDate',
    'holidays',
    'sectors',
    'edit',
    'delete',
  ];
  dataSource!: MatTableDataSource<IEmployee>;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(public dialog: MatDialog, private svc: ApiService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id: any): void {
    const _dialog = this.dialog.open(NewEmployeeComponent, {
      width: '500px',
      data: {
        id: id,
      },
    });
    _dialog.afterClosed().subscribe((res) => {
      this.getEmployees();
    });
  }

  buildTable(data: IEmployee[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  getEmployees() {
    this.svc.getEmployees().subscribe((data) => {
      this.buildTable(data);
    });
  }

  editEmployee(id: any) {
    this.openDialog(id);
  }

  deleteEmployee(id: any) {
    this.svc.deleteEmployee(id).subscribe((res) => {
      this.getEmployees();
    });
  }
}
