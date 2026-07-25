import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../models/course';
import { loadCourses } from '../store/course/course.actions';
import { selectAllCourses } from '../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private store: Store) {
    this.courses$ = this.store.select(selectAllCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }
}
