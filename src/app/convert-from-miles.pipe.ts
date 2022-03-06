import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertFromMiles'
})
export class ConvertFromMilesPipe implements PipeTransform {

  transform(value: number, args: string = ''): number | string {
    if (!value) {
      return '';
    }
    else if (args === 'km') {
      return value * 1.60934;
    }
    else if (args === 'm') {
      return value * 1000 * 1.60934;
    }
    else if (args === 'cm') {
      return value * 1000 * 100 * 1.60934;
    }
    else if (args === 'mm') {
      return value * 1000 * 100 * 1000 * 1.60934;
    }
    else {
      throw new Error('Target unit not supported.');
    }
  }

}
