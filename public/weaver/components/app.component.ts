import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    /*
     *  bug? seems the "weaver" variable in System.js is not working in here, 
     *      hence you need to supply the full path to the the template's url
     */
    templateUrl: 'public/weaver/components/views/app.component.html'
})

export class AppComponent {};