import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  allStudents: any[] = [];
  currentStudent: any = null;

  constructor(private router: Router) {
    this.loadData();
  }

  loadData(): void {
    const studentsData = localStorage.getItem('students');
    this.allStudents = studentsData ? JSON.parse(studentsData) : [];
    this.currentStudent = JSON.parse(localStorage.getItem('currentStudent') || 'null');
    
    if (!this.currentStudent) {
      this.router.navigate(['/home']);
    }
  }

  clearAllStudents(): void {
    if (confirm('Are you sure you want to clear ALL student data?')) {
      localStorage.removeItem('students');
      localStorage.removeItem('currentStudent');
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }
  }
}