import { Component } from '@angular/core';

@Component({
  selector: 'app-t1-container',
  templateUrl: './t1-container.component.html',
  styleUrls: ['./t1-container.component.css']
})
export class T1ContainerComponent {
onClap() {
console.log("Printing: Claps from container");
this.containerProp = "The value comes from container prop";
}
containerProp: string = "Initial value";

}
