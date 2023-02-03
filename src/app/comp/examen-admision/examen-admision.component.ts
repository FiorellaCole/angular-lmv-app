import { Component, OnInit } from '@angular/core';
import { evaluaciones } from 'src/data';

@Component({
  selector: 'app-examen-admision',
  templateUrl: './examen-admision.component.html',
  styleUrls: ['./examen-admision.component.css']
})
export class ExamenAdmisionComponent implements OnInit{
  
//combinar el ngFor y el ngSwitch
  eval: number = 1;
  evaluaciones: any[] = evaluaciones;
  btnEvalua: string = "Siguiente etapa";


  continuarEvaluacion = () => {
    //this.eval=(this.eval===this.evaluaciones.length)?1:this.eval+1;}
    this.eval = this.eval + 1;
    this.btnEvalua = this.eval === 6 ? 'Término de Examen' : 'Siguiente etapa';
  }

  id:any
  ngOnInit(): void {
    this.id=setInterval(()=>{
      this.continuarEvaluacion();
    },4000)
  }

  ngDestroy():void {
    if(this.id){
      clearInterval(this.id);
    }
  }

}
