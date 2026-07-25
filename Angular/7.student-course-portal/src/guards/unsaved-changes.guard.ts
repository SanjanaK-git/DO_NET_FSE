import { Injectable } from '@angular/core';


@Injectable({
providedIn:'root'
})

export class UnsavedChangesGuard{


canDeactivate(component:any){

if(component.enrollForm &&
component.enrollForm.dirty){

return window.confirm(
'You have unsaved changes. Leave?'
);

}

return true;

}

}
