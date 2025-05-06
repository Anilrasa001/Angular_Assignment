import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-directory',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-directory.component.html'
})
export class EmployeeDirectoryComponent {
  employees: any[] = [];
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form inside constructor
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employees.push(this.employeeForm.value);
      this.employeeForm.reset();
    }
  }
}
