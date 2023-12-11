import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(people: any, ...args: unknown[]): any[] { //... means any number of parameter (array) similar to params - spread operator; one parameter is compulsory
    //var people= Person.GetPeople();
    var result:Person[] = [];
    for (let i = 0; i < people.length; i++) {
      if(people[i].name.includes(args[0])){
        result.push(people[i]);
      }
    }
    return result; //must return
  }

}
