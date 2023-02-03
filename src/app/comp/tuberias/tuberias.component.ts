import { Component } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent {
  parrafo:string='es un párrafo de un libro de programación'
  tituloLibro='TRADICIONES PERUANAS'
  precio: number=24213681.341343;
  IGV:number=0.18;
  TCEA:number=0.86;

  ahorro:number=2400;
  fecha:Date=new Date()

  vistasPrincipiante:number=40;
  vistasPrimedio: number=600;
  vistasConAudiencia:number=2000;
  vistasNoValidas:number=-20;
}
