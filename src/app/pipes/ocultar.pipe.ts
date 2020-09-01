import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar',
})
export class OcultarPipe implements PipeTransform {
  transform(value: string, oculto: boolean = true): string {
    return oculto ? '*'.repeat(value.length) : value;
  }
}
