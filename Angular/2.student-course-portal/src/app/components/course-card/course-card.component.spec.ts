import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        CourseCardComponent
      ]

    }).compileComponents();


    fixture = TestBed.createComponent(CourseCardComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });


  it('should display course name', () => {


    component.course = {

      id:1,
      name:'Angular',
      code:'ANG101',
      credits:4

    };


    fixture.detectChanges();


    const element =
    fixture.nativeElement;


    expect(element.textContent)
    .toContain('Angular');


  });



  it('should emit enroll event', () => {


    spyOn(
      component.enrollRequested,
      'emit'
    );


    component.enrollRequested.emit(1);


    expect(
      component.enrollRequested.emit
    )
    .toHaveBeenCalledWith(1);


  });


});
