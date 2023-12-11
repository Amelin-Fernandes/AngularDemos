import { Component } from '@angular/core';

@Component({
  selector: 'app-template-refs',
  templateUrl: './template-refs.component.html',
  styleUrls: ['./template-refs.component.css']
})
export class TemplateRefsComponent {
inputcolor(_t4: any) {
  if(_t4.value == ""){
    _t4.style = "background-color: red";
  } else{
    _t4.style = "background-color: yellow";
  }
  
}
dontDisturb(_t2: any) {
  _t2.style = "background-color: grey";
}
switchOff(_t2: any) {
  _t2.style = "background-color: black";
}
lightUp(_t2: any) {
  _t2.style = "background-color: orange";
}


}
