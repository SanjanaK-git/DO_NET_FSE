import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [CourseCardComponent]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

  });

  // Test 1
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 2
  it('should display course name', () => {

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'Passed'
    };

    fixture.detectChanges();

    const heading =
      fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(heading.textContent).toContain('Data Structures');

  });

  // Test 3
  it('should emit enroll event', () => {

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'Passed'
    };

    spyOn(component.enrollRequested, 'emit');

    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('button'))
      .nativeElement.click();

    expect(component.enrollRequested.emit)
      .toHaveBeenCalledWith(1);

  });

  // Test 4
  it('should call ngOnChanges', () => {

    spyOn(console, 'log');

    component.ngOnChanges({

      course: new SimpleChange(
        null,
        component.course,
        true
      )

    });

    expect(console.log).toHaveBeenCalled();

  });

  // Test 5
  it('should render button', () => {

    fixture.detectChanges();

    const button =
      fixture.debugElement.query(By.css('button'));

    expect(button).toBeTruthy();

  });

});
