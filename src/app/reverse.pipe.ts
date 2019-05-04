import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args): any {
    console.log(value, args)
    let newstring = value
    if (args[0]){ // I want a full stop
      newstring += "!"
    }
    if (args[1] === "singlequote"){
      newstring = ": " + newstring;
    } else if (args[2] === "doublequote"){
      newstring = '; ' + newstring
    }
    return newstring;
  }

}
