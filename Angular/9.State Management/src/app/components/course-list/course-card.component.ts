import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from '../models/course';
import { enrollInCourse } from '../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html'
})
export class CourseCardComponent {

  @Input() course!: Course;

  constructor(private store: Store) {}

  enroll(): void {
    this.store.dispatch(
      enrollInCourse({ courseId: this.course.id })
    );
  }
}
