import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html'
})
export class CourseCardComponent implements OnChanges {

  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

  enroll() {
    this.enrollRequested.emit(this.course.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed', changes);
  }
}
