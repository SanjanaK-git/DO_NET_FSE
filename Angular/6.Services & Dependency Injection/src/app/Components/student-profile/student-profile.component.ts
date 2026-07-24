import { Component } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
 selector:'app-student-profile',
 templateUrl:'./student-profile.component.html',
 styleUrls:['./student-profile.component.css']
})
export class StudentProfileComponent{

 constructor(private enrollmentService:EnrollmentService){}

 get courses(){
   return this.enrollmentService.getEnrolledCourses();
 }

}
