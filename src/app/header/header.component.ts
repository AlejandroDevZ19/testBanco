import {Component} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
    constructor(){
        console.log('se cargó el componente');

    }
}