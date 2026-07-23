import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';


describe('HomeComponent', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        HomeComponent
      ]

    }).compileComponents();


    fixture = TestBed.createComponent(HomeComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });



  it('should create home component', () => {

    expect(component).toBeTruthy();

  });



  it('should display portal name', () => {


    const element = fixture.nativeElement;


    expect(element.textContent)
    .toContain('Student Course Portal');


  });



  it('should update message on enroll click', () => {


    component.onEnrollClick();


    expect(component.message)
    .toBe('Enrollment opened!');


  });



  it('should update search term using two way binding', () => {


    component.searchTerm = "Angular";


    expect(component.searchTerm)
    .toBe("Angular");


  });


});
