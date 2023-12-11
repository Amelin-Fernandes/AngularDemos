import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { PeopleComponent } from './people/people.component';
import { IfComponent } from './if/if.component';
import { NameReverseComponent } from './name-reverse/name-reverse.component';
import { TemplateRefsComponent } from './template-refs/template-refs.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplateformsL2Component } from './templateforms-l2/templateforms-l2.component';
import { RformComponent } from './rform/rform.component';
import { LoginComponent } from './login/login.component';
import { CheckTokenService } from './check-token.service';
import { AccessRouteParamsComponent } from './access-route-params/access-route-params.component';
import { T1ContainerComponent } from './t1-container/t1-container.component';
import { T2ContainerComponent } from './t2-container/t2-container.component';
import { T3ContainerComponent } from './t3-container/t3-container.component';
import { UseDirectiveComponent } from './use-directive/use-directive.component';

const routes: Routes = [
  {path:'person/add', component: AddPersonComponent},
  {path:'people', component: PeopleComponent},
  {path:'using/if', component: IfComponent},
  {path:'reverse/name', component: NameReverseComponent},
  {path:'using/template/ref', component: TemplateRefsComponent},
  {path:'template/forms', component: TemplateFormsComponent},
  {path:'template/forms/l2', component: TemplateformsL2Component, canActivate:[CheckTokenService]},
  {path:'template/rform', component: RformComponent},
  {path:'login', component: LoginComponent},
  {path:'route/params/:p1/:p2', component: AccessRouteParamsComponent},
  {path:'C2C/type1', component: T1ContainerComponent},
  {path:'C2C/type2', component: T2ContainerComponent},
  {path:'highlight', component: UseDirectiveComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
