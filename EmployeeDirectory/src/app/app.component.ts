import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, RouterModule],
  template: `<app-navbar></app-navbar><router-outlet></router-outlet>`
})
export class AppComponent {}