import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes-banco',
  templateUrl: './clientes-banco.component.html',
  styleUrls: ['./clientes-banco.component.css']
})
export class ClientesBancoComponent {

  validacion=(event:any)=>{
    const reg = /^-?\d*(\.\d{0,3})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);

    if(!reg.test(input)){
      event.preventDefault();
    }
  }

  resultado:any;
  clientes:any[]=[];
  enviaCliente=(value:any)=>{
    this.resultado=value;
    this.clientes.push(value);
  }


}
