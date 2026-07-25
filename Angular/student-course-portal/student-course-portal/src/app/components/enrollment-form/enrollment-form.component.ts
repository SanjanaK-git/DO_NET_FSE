import { Component } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';


@Component({
selector:'app-enrollment-form',
templateUrl:'./enrollment-form.component.html',
styleUrls:['./enrollment-form.component.css']
})
export class EnrollmentFormComponent{


courseId:number=0;


constructor(
private enrollmentService:EnrollmentService
){}


submit(){

this.enrollmentService.enroll({

courseId:this.courseId

})
.subscribe(()=>{

alert("Enrollment Successful");

});

}

}
