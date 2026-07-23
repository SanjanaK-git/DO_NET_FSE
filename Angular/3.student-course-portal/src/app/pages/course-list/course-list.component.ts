import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  selectedCourseId = 0;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA101',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY101',
      credits: 2,
      gradeStatus: 'pending'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onEnroll(id: number) {
    this.selectedCourseId = id;
    console.log('Enrolling in Course:', id);
  }
}
