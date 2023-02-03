import { Component, OnInit } from '@angular/core';
import { zapatillas } from 'src/data';

@Component({
  selector: 'app-marca-zapatilla',
  templateUrl: './marca-zapatilla.component.html',
  styleUrls: ['./marca-zapatilla.component.css']
})
export class MarcaZapatillaComponent implements OnInit{

  
    //combinar el ngFor y el ngSwitch
      zapas: number = 1;
      zapatillas: any[] = zapatillas;
      btnEvalua: string = "Siguiente zapatilla";
    
    
      continuarCatalogo = () => {
  
 
        this.zapas = (this.zapas===this.zapatillas.length)?1:this.zapas+1;

      }
    
      id:any
      ngOnInit(): void {
        this.id=setInterval(()=>{
          this.continuarCatalogo();
        },2000)
      }
    
      ngDestroy():void {
        if(this.id){
          clearInterval(this.id);
        }
      }
    
    }
    