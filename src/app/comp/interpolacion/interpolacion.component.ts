import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {

    title = 'Java Dront Developer';
    subtitulo: string = 'aplicación está ejecutándose';
    dni: string = '58499345';
    n1:number=30;
    n2:number=20;
}
