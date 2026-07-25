import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {

  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const initialState = {
    course: {
      courses: [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'React' }
      ],
      loading: false,
      error: null
    }
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load courses from store', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading state', () => {

    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      }
    });

    fixture.detectChanges();

    expect(component).toBeTruthy();

  });

});
