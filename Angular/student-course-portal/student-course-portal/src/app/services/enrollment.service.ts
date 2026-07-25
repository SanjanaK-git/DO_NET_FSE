import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn:'root'
})
export class EnrollmentService {


private apiUrl = 
'http://localhost:3000/enrollments';


constructor(
private http:HttpClient
){}



getStudentsByCourse(courseId:number):Observable<any>{

return this.http.get<any[]>(
`${this.apiUrl}?courseId=${courseId}`
);

}



enroll(data:any):Observable<any>{

return this.http.post(
this.apiUrl,
data
);

}



unenroll(id:number):Observable<void>{

return this.http.delete<void>(
`${this.apiUrl}/${id}`
);

}


}
