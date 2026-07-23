import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { CourseListComponent } from './pages/course-list/course-list.component';



export const routes: Routes = [


{
path:'',
component:HomeComponent
},


{
path:'courses',
component:CourseListComponent
}


];
