import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombrePipe'
})
export class NombrePipePipe implements PipeTransform {

  transform(value: any[], nombrePipe:string): any {
    const resultado= [];

    if(nombrePipe==='') return value;
    for(const zapa of value){
      if(zapa.marca.toLowerCase().indexOf(nombrePipe.toLowerCase())>-1 || zapa.precio.indexOf(nombrePipe)>-1){
      resultado.push(zapa)
      }
    }
    return resultado;
  }
}

