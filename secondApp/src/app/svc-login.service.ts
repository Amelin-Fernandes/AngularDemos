import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //step 2: importing service

@Injectable({ //same as addsingelton() in mvc
  providedIn: 'root'
})
export class SvcLoginService {

  constructor(private http:HttpClient) { } //step 3: inject

  public login(email:string, pwd:string){
    let url="https://reqres.in/api/login";
    let body={
                email: email,
                password: pwd
             };
    return this.http.post(url,body); //returns an observable, keeps observing the url from where data is obtained

  }
}
