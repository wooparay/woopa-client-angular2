import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
    selector: 'my-app',
    /*
     *  bug? seems the "weaver" variable in System.js is not working in here, 
     *      hence you need to supply the full path to the the template's url
     */
    templateUrl: 'public/weaver/components/views/app.component.html',
    /*
     *  style(s): so now you can add specific styles related to the component (css overriding)
     */
    styleUrls: [ 'public/css/test-css.css' ]
})

export class AppComponent implements OnInit {
    private testingTitle:string = 'tEsT';
    private testingName:string = 'a testing name... please modify';

    /**
     *  ctor
     */
    constructor() {
        console.log('** ctor');
        
        var jH1=$('#txt_test');
        console.log(jH1);
        console.log(jH1.attr('id'));
        
        console.log(document.body);
        console.log(document.getElementsByTagName('input'));
        console.log(document.getElementsByTagName('input')[0]);
/*        
        var jTxt=document.getElementById('txt_test');
        console.log(jTxt);
        console.log(jTxt.id);
*/        
    }

    ngOnInit(): void {
        console.log('** inside onInit');
    }
    

};