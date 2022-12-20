import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeBlankSpace'
})
export class RemoveBlankSpacePipe implements PipeTransform {

  transform(value: any): any {
    if (value === undefined)
      return 'undefined';
    return value.replace(/\s/g, "");
  }

}
