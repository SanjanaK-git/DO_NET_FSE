import { Routes } from '@angular/router';

import { CourseListComponent } 
from './components/course-list/course-list.component';

import { CourseDetailComponent } 
from './components/course-detail/course-detail.component';

import { EnrollmentFormComponent } 
from './components/enrollment-form/enrollment-form.component';


export const routes: Routes = [

{
  path:'',
  component:CourseListComponent
},

{
  path:'courses/:id',
  component:CourseDetailComponent
},

{
  path:'enroll',
  component:EnrollmentFormComponent
},

{
  path:'**',
  redirectTo:''
}

];
