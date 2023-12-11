import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({ //@ is used instead of [], it's a decorator
  selector: 'add-person',
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent {
  public greeting:string=`Welcome to Karnataka People's Forum.
                          Add yourself to this forum here`
}
