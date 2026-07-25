import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent {

  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.enrollForm = this.fb.group({
      studentName: [''],
      courseName: ['']
    });

  }

  submit() {
    console.log(this.enrollForm.value);
  }

}
