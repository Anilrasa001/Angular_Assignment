import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { authGuard } from './guards/auth.guard';
import { formGuard } from './guards/form.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'register', 
    component: StudentRegisterComponent,
    canDeactivate: [formGuard]
  },
  { 
    path: 'dashboard', 
    component: StudentDashboardComponent,
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/home' }
];