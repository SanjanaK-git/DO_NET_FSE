import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
 selector:'app-course-summary-widget',
 templateUrl:'./course-summary-widget.component.html',
 styleUrls:['./course-summary-widget.component.css']
})
export class CourseSummaryWidgetComponent{

 constructor(private courseService:CourseService){}

 get count(){
   return this.courseService.getCourses().length;
 }

}
