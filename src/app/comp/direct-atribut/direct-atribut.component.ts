import { Component, OnInit } from '@angular/core';
import { cursos } from 'src/data';

@Component({
  selector: 'app-direct-atribut',
  templateUrl: './direct-atribut.component.html',
  styleUrls: ['./direct-atribut.component.css']
})
export class DirectAtributComponent implements OnInit {

  edad: number = 20;
  cursos: any[] = cursos;


  asignaEstilo = (nivel: string) => {
    let estilo;
    switch (nivel) {
      case 'básico': {
        estilo = { 'color': 'green', 'font-size': '25px', 'background-color': 'black' }
        break;
      }

      case 'intermedio': {
        estilo = { 'color': 'gold', 'font-size': '28px', 'background-color': 'black' }
        break;
      }

      case 'avanzado': {
        estilo = { 'color': 'white', 'font-size': '30px', 'background-color': 'yellowgreen' }
        break;
      }

      default: {
        break;
      }

    }
    return estilo;
  }

  fnCLase = () => {
    return false;
  }

  indicadorEstilo: boolean = false;
  fnDefineEstilo = () => {
    let estiloAlta = 'text-primary display-3 lead';
    let estiloBaja = 'text-info display-2 lead';
    return this.indicadorEstilo ? estiloAlta : estiloBaja;
  }
  btnCambiaEstilo: string = 'Cambiar Estilo';
  cambiaEstiloParrafo = () => {
    this.indicadorEstilo = !this.indicadorEstilo;
  }

  constructor() { }
  id: any;

  ngOnInit(): void {

    this.id = setInterval(() => {
        this.cambiaEstiloParrafo();
    }, 1000)
  }

  ngOnDestroy(): void {
    if(this.id){
      clearInterval(this.id);
    }

  }

}
