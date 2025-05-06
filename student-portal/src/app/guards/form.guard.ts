import { CanDeactivateFn } from '@angular/router';
import { StudentRegisterComponent } from '../components/student-register/student-register.component';

export const formGuard: CanDeactivateFn<StudentRegisterComponent> = 
  (component: StudentRegisterComponent, currentRoute, currentState, nextState) => {
    
    // If form is submitted or not dirty, allow navigation
    if (component.formSubmitted || 
        (!component.student.username && !component.student.email)) {
      return true;
    }
    
    // Otherwise confirm with user
    return confirm('You have unsaved changes. Are you sure you want to leave?');
};