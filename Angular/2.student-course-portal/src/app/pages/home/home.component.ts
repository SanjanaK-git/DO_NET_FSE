import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
selector:'app-home',
standalone:true,
imports:[FormsModule],
templateUrl:'./home.component.html',
styleUrl:'./home.component.css'
})


export class HomeComponent implements OnInit,OnDestroy{


portalName="Student Course Portal";

isPortalActive=true;

message="";

searchTerm="";


ngOnInit(){

console.log(
"HomeComponent initialised — courses loaded"
);

}


onEnrollClick(){

this.message="Enrollment opened!";

}



ngOnDestroy(){

console.log(
"HomeComponent destroyed"
);

}


}
