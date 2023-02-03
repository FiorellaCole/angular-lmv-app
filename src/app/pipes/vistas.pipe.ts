import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vistas'
})
export class VistasPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    let resultado = `Usted tiene ${value} vistas `;

    if (value<0) {
      resultado = `El número de vistas es negativo y no es válido`

    } else {

      if (value >= 0 && value <= 500) {
        resultado += `por lo cual está iniciándose como youtuber`
      } else if (value > 500 && value < 1000) {
        resultado += 'por lo tanto ya es un youtuber promedio'
      } else {
        resultado += 'por lo tanto ya es un youtuber con audiencia'
      }
      
    }
    return resultado;
  }
}
