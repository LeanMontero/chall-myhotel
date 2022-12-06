import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
})
export class NewEmployeeComponent implements OnInit {
  sectorsList: string[] = [
    'Agriculture',
    'Production',
    'Commerce',
    'Construction',
    'Mining',
    'Transport',
  ];
  date = new Date();
  editEmployee: any;
  constructor(
    private form: FormBuilder,
    public dialogRef: MatDialogRef<NewEmployeeComponent>,
    private svc: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.svc.getEmployeesById(this.data.id).subscribe((res) => {
        this.editEmployee = res;
        this.employeeForm.setValue({
          id: this.editEmployee.id,
          name: this.editEmployee.name,
          creationDate: this.editEmployee.creationDate,
          sectors: this.editEmployee.sectors,
        });
      });
    }
  }

  employeeForm = this.form.group({
    id: this.form.control({ value: '', disabled: true }),
    name: this.form.control('', Validators.required),
    creationDate: this.form.control(this.date.toUTCString()),
    sectors: this.form.control('', Validators.required),
  });

  addEmployee() {
    if (this.employeeForm.valid) {
      const id = this.employeeForm.getRawValue().id;
      if (id != '' && id != null) {
        this.svc
          .updateEmployee(id, this.employeeForm.getRawValue())
          .subscribe((res) => {
            this.dialogRef.close();
            alert('Updated successfully');
          });
      } else {
        this.svc
          .createEmployee(this.employeeForm.value)
          .subscribe((response) => {
            alert('Saved successfully');
            this.dialogRef.close();
          });
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
