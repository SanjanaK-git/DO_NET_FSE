import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';


@Component({
 selector:'app-notification',
 templateUrl:'./notification.component.html',
 styleUrls:['./notification.component.css'],
 providers:[NotificationService]
})

export class NotificationComponent{

constructor(private notification:NotificationService){}


// Component level provider creates a separate instance
// only for this component and its children.

showMessage(){
 this.notification.show("Notification Working");
}

}
