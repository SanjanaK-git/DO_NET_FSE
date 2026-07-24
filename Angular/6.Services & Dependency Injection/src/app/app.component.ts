import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseSummaryWidgetComponent } from './components/course-summary-widget/course-summary-widget.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { NotificationComponent } from './components/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CourseListComponent,
    CourseSummaryWidgetComponent,
    StudentProfileComponent,
    NotificationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'student-course-portal';

}
