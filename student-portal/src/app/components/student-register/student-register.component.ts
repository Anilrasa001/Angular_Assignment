import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Student {
  username: string;
  email: string;
  id: string;
}

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  student: Student = {
    username: '',
    email: '',
    id: Date.now().toString()
  };
  formSubmitted = false;

  constructor(private router: Router) {}

  onSubmit(): void {
    this.formSubmitted = true;
    
    const existingStudents: Student[] = JSON.parse(localStorage.getItem('students') || '[]');
    
    // Check for duplicate email with explicit typing
    if (existingStudents.some((s: Student) => s.email === this.student.email)) {
      alert('This email is already registered!');
      return;
    }
    
    // Add new student
    existingStudents.push(this.student);
    
    // Update storage
    localStorage.setItem('students', JSON.stringify(existingStudents));
    localStorage.setItem('currentStudent', JSON.stringify(this.student));
    
    // Redirect and refresh
    this.router.navigate(['/dashboard']).then(() => {
      window.location.reload();
    });
  }

  resetForm(form: NgForm): void {
    form.reset();
    this.student = {
      username: '',
      email: '',
      id: Date.now().toString()
    };
  }
}