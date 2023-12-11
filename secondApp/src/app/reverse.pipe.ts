import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(name: any, ...args: unknown[]): any {
    var result:any[] = [];
    var final = "";
    for (let i = name.length; i >= 0; i--) {
      result.push(name[i]);
    }
    return result.join(''); //must return
  }

}
