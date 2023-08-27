import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados' //nombre con el que voy a llamar al pipe
})
export class EstadosPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    const text = value ? 'PENDIENTE' : 'REGISTRADO'; //función que recibe y transforma el valor
    return text;
  }

}
