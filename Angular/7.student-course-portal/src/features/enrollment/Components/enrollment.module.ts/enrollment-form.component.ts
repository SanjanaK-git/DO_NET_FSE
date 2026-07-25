import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {

  studentName = '';
  courseName = '';

  submit() {
    alert('Enrollment Successful');
  }

}
