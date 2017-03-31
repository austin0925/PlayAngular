import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-eracheck',
    // templateUrl: `eracheck.component.html`,
    //C:\git\angular-quickstart\src\app\eracheck.component.html
    templateUrl: `./html/00-EMIC_Table_list.html`,
    //C:\git\angular-quickstart\html\00-EMIC_Table list.html
    styleUrls: ['./eracheck.component.css']
})
export class EracheckComponent{

    constructor(private router: Router){};


    gotoUrl(url: string){
        // alert(url);
        this.router.navigateByUrl('/erareporta4');
    }
}