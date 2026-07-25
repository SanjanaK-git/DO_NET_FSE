import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { CoursesLayoutComponent } from './components/courses-layout/courses-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

{
 path:'',
 component:HomeComponent
},

{
 path:'courses',
 component:CoursesLayoutComponent,
 children:[
   {
    path:'',
    component:CourseListComponent
   },
   {
    path:':id',
    component:CourseDetailComponent
   }
 ]
},

{
 path:'profile',
 component:StudentProfileComponent,
 canActivate:[AuthGuard]
},

{
 path:'enroll',
 loadChildren:()=>import('./features/enrollment/enrollment.module')
 .then(m=>m.EnrollmentModule)
},

{
 path:'**',
 component:NotFoundComponent
}

];
