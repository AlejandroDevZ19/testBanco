import {Component} from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent{
    constructor(){
        console.log('se cargó el componente');

    }
}