import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';


@Component({
selector:'app-course-detail',
templateUrl:'./course-detail.component.html',
styleUrls:['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{


course?:Course;


constructor(
private route:ActivatedRoute,
private courseService:CourseService
){}


ngOnInit(){

let id =
Number(this.route.snapshot.paramMap.get('id'));


this.courseService
.getCourseById(id)
.subscribe(data=>{

this.course=data;

});


}

}
