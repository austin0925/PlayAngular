import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'my-nttcheck',
    templateUrl: `./nttcheck.component.html`
})

export class NttcheckComponent{

    public title = 'angular2-signaturepad-demo';
    public form: FormGroup;

    public submit(){
        console.log('submit...');
    }

    public beResponsive() {
        console.log('Resizing signature pad canvas to suit container size')
        /*this.size(this.sigContainer1.first, this.sigs.first);
        this.size(this.sigContainer2.first, this.sigs.last);*/
    }
}