import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('currentStudent');
  }

  logout(): void {
    // Clear ALL student data from localStorage
    localStorage.clear(); // This removes everything
    
    // Alternative if you need to keep other data:
    // localStorage.removeItem('currentStudent');
    // localStorage.removeItem('students');
    
    // Force complete application reset
    this.router.navigate(['/home']).then(() => {
      window.location.reload(); // Ensures complete state reset
    });
  }
}