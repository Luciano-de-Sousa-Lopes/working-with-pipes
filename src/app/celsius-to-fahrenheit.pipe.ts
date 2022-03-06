import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiusToFahrenheit'
})
export class CelsiusToFahrenheitPipe implements PipeTransform {

  transform(value: number, args: string = ''): number | string {
    if (isNaN(value)) {
      throw new Error('Unit Unknown');
    }
    else {
      switch (args) {
        case '':
          return 0;
        case 'F':
          value = Number(value) * 9 / 5 + 32;
          return value;
        case 'K':
          value = Number(value) + 273.15
          return value;
        default:
          return value;
      }
    }
  }

}
