import {Component} from '@angular/core';

@Component({
    selector: 'card-alert',
    templateUrl: './card-alert.component.html',
    styleUrls: ['./card-alert.component.css'],
})
export class CardAlertComponent{
    constructor(){
        console.log('se cargó el componente');

    }
}