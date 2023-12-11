import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-t2-container',
  templateUrl: './t2-container.component.html',
  styleUrls: ['./t2-container.component.css']
})
export class T2ContainerComponent {
prop: any;
@ViewChild(ViewChildComponent) child!:ViewChildComponent;

constructor(private cd:ChangeDetectorRef){}

ngAfterViewInit(){
  console.log(this.child);
  this.child.message = "A new message from container";
  this.cd.detectChanges();
}
}
