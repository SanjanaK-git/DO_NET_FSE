import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input() course:any;

  @Output() enrollRequested = new EventEmitter<number>();


  ngOnChanges(changes: SimpleChanges){

    console.log(
      "Course Changed",
      changes
    );

  }

}
