import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo= 'Flotas La Macarena';
  nit= 800220154;
  capa= 'Oro';
  segmento ='A';
  gerenteRelacion= 'Carlos Gómez';
}
