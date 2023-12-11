import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleComponent } from './people/people.component';
import { SearchPipe } from './search.pipe';
import { ReversePipe } from './reverse.pipe';
import { NameReverseComponent } from './name-reverse/name-reverse.component';
import { IfComponent } from './if/if.component';
import { BuiltInTypesComponent } from './built-in-types/built-in-types.component';
import { TemplateRefsComponent } from './template-refs/template-refs.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplateformsL2Component } from './templateforms-l2/templateforms-l2.component';
import { RformComponent } from './rform/rform.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AccessRouteParamsComponent } from './access-route-params/access-route-params.component';
import { T1ContainerComponent } from './t1-container/t1-container.component';
import { T1AssociateComponent } from './t1-associate/t1-associate.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { T2ContainerComponent } from './t2-container/t2-container.component';
import { T3ContainerComponent } from './t3-container/t3-container.component';
import { T3ChildComponent } from './t3-child/t3-child.component';
import { HighlightDirective } from './highlight.directive';
import { UseDirectiveComponent } from './use-directive/use-directive.component'; //step 1: importing module

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PeopleComponent,
    SearchPipe,
    ReversePipe,
    NameReverseComponent,
    IfComponent,
    BuiltInTypesComponent,
    TemplateRefsComponent,
    TemplateFormsComponent,
    TemplateformsL2Component,
    RformComponent,
    LoginComponent,
    AccessRouteParamsComponent,
    T1ContainerComponent,
    T1AssociateComponent,
    ViewChildComponent,
    T2ContainerComponent,
    T3ContainerComponent,
    T3ChildComponent,
    HighlightDirective,
    UseDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //who is your container component whic contains other components
})
export class AppModule { }
