import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../person';

@Component({ //@ is used instead of [], it's a decorator
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
public addPerson(pAadhar: string,pName: string,pAge: number, pAlive:boolean) {
  var person = new Person(pAadhar,pName,pAge);
  person.isAlive = pAlive;
  Person.AddPerson(person);
  this.status = `Person with name ${person.name} added succesfully`;
}

public handleclick(s: string) {
  this.status = `You entered the state ${s}`;
  return `You entered the state ${s}`;
}

  public CalculateDogYears(age: number) {
    return age/7;
  }
  public greeting:string=`Welcome to Karnataka People's Forum.
                          Add yourself to this forum here`
  public state:string="Karnataka";
  public p:Person= new Person("AABB342167895432","Amelin",23);
  public status: string = '';
}
