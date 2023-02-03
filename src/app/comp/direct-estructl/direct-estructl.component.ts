import { Component } from '@angular/core';
import { cursos, evaluaciones } from 'src/data';

@Component({
  selector: 'app-direct-estructl',
  templateUrl: './direct-estructl.component.html',
  styleUrls: ['./direct-estructl.component.css']
})
export class DirectEstructlComponent {

  edad: number = 20;
  evaluacion: number = 1;
  btnMensajeEvaluacion: string = 'Siguiente Evaluación'
  muestraSiguienteEvaluacion() {
    this.evaluacion = this.evaluacion + 1;
    this.btnMensajeEvaluacion = this.evaluacion === 5 ? 'Termina Evaluación' : 'Siguiente Evaluación';
  }

  //arreglo
  cursos: any[] = cursos;

}
