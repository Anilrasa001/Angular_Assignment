import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { EmployeeDirectoryComponent } from './app/employee-directory/employee-directory.component';

const routes: Routes = [
  { path: 'directory', component: EmployeeDirectoryComponent },
  { path: '', redirectTo: 'directory', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      ReactiveFormsModule
    )
  ]
}).catch(err => console.error(err));
