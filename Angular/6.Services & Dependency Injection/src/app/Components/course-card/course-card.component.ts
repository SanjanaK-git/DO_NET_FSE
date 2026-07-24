import { Component, Input } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() course!: Course;

  constructor(private enrollmentService: EnrollmentService){}

  toggleEnrollment(){

    if(this.enrollmentService.isEnrolled(this.course.id)){
      this.enrollmentService.unenroll(this.course.id);
    }
    else{
      this.enrollmentService.enroll(this.course.id);
    }

  }

  isEnrolled(){
    return this.enrollmentService.isEnrolled(this.course.id);
  }
}
