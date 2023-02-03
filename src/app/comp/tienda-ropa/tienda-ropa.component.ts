import { Component } from '@angular/core';
import { cursos, ropa, zapatillas } from 'src/data';

@Component({
  selector: 'app-tienda-ropa',
  templateUrl: './tienda-ropa.component.html',
  styleUrls: ['./tienda-ropa.component.css']
})
export class TiendaRopaComponent {

  ropa:any[]=ropa;
  zapatillas:any[]=zapatillas
  consulta:string='';


}
